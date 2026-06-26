import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const GITHUB_API = 'https://api.github.com';
const CACHE_KEY_REPOS = 'github:repos';
const CACHE_KEY_ETAG = 'github:etag';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const cachedEtag = await redis.get<string>(CACHE_KEY_ETAG);
    const cachedRepos = await redis.get<string>(CACHE_KEY_REPOS);

    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': process.env.GITHUB_AGENT!,
    };

    if (cachedEtag) {
      headers['If-None-Match'] = cachedEtag;
    }

    const githubRes = await fetch(
      `${GITHUB_API}/users/${process.env.GITHUB_USERNAME}/repos?per_page=30&sort=updated`,
      { headers }
    );

    if (githubRes.status === 304 && cachedRepos) {
      return res.status(200).json(JSON.parse(cachedRepos));
    }

    if (!githubRes.ok) {
      // devolvemos cache. si existe, sino vacio.
      if (cachedRepos) return res.status(200).json(JSON.parse(cachedRepos));
      return res.status(502).json([]);
    }

    //respuesta OK de github

    const repos = await githubRes.json();

    //filtramos
    const filtered = repos
      .filter((r: any) => r.topics?.includes('portfolio'))
      .map((r: any) => ({
        ...r,
        topics: r.topics.filter((t: string) => t !== 'portfolio'),
      }));
    
    //cacheamos
    const newEtag = githubRes.headers.get('etag');
    // dura una semana (604800s)
    await redis.set(CACHE_KEY_REPOS, JSON.stringify(filtered), { ex: 604800 });
    if (newEtag) await redis.set(CACHE_KEY_ETAG, newEtag, { ex: 604800 });

    return res.status(200).json(filtered);

  } catch (error) {
    console.error('Error in /api/projects:', error);
    return res.status(500).json([]);
  }
}