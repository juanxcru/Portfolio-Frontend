import { HttpClient } from "@angular/common/http";
import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { LanguageService, Locale } from "./language.service";
import { backend } from "../../app.component";


export interface CvInfo {

    title: string;
    subtitle: string;
    availability: string;
    avail_short: string;
    cover_letter: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    stack: {
        frameworks: string[];
        database: string[];
        languages: string[];
        other: string[];
    };
    bio1: string;
    bio2: string;
    bio3: string;
    experience: Array<{
        company: string;
        role: string;
        from: string;
        to: string;
        description: string;
        bullets: string[];
    }>
}



type LoadState = 'idle' | 'loading' | 'loaded' | 'error';



@Injectable({ providedIn: 'root' })
export class CvInfoStore {
    private readonly http = inject(HttpClient);
    private readonly langService: LanguageService = inject(LanguageService);

    private readonly _cvInfo = signal<CvInfo | null>(null);
    readonly cvInfo = this._cvInfo.asReadonly();


    private readonly _state = signal<LoadState>('loading');
    readonly state = this._state.asReadonly();

    readonly isLoading = computed(() => this._state() === 'loading');

    private readonly memCacheInfo = new Map<Locale, CvInfo>();

    constructor() {
        effect(() => {
            const locale = this.langService.locale();
            this.loadCVInfo(locale);

        });
    }

    private loadCVInfo(locale: Locale) {

        const fromMem = this.memCacheInfo.get(locale);
        if (fromMem) {
            this._cvInfo.set(fromMem);
            this._state.set('loaded');
            return;
        }

        const fromSs = this.readCVInfoFromSessionStorage(locale);

        if (fromSs) {
            this._cvInfo.set(fromSs);
            this.memCacheInfo.set(locale, fromSs);
            this._state.set('loaded');
            return;
        }
        
        //from backend
        this._state.set('loading');
        this.http.get<CvInfo>(`${backend}/info`).subscribe({
            next: (data) => {
                this.memCacheInfo.set(locale, data);
                this.writeCVInfoFromSessionStorage(locale, data);
                this._cvInfo.set(data);
                this._state.set('loaded');
            },
            error: () => {
                console.error('error trying to get info from BE');
                this._state.set('error');
            }
        });

        

    }



    private readCVInfoFromSessionStorage(locale: Locale): CvInfo | null {
        try {
            const raw = sessionStorage.getItem(`portfolio.cvInfo.${locale}`);
            if (!raw) return null;
            return JSON.parse(raw) as CvInfo;
        } catch {
            console.error('error when trying to get info from sessionStorage')
            return null;
        }
    }

    private writeCVInfoFromSessionStorage(locale: Locale, data: CvInfo) {
        try {
            sessionStorage.setItem(`portfolio.cvInfo.${locale}`, JSON.stringify(data));
        } catch {
            console.error('error when trying to write info to sessionStroage')
            return;
        }
    }


}
