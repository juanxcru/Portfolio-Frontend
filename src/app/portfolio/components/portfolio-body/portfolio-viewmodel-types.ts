import { CvInfo } from '../../store/cvinfo.store';

export type ContactInfo = Pick<CvInfo, 
                        'availability' |
                        'avail_short'|
                        'location'|
                        'email'>;
//Hero section
export type SocialLinks = Pick<CvInfo, 'github' | 'linkedin'| 'email'>;
export type Stack = Pick<CvInfo, 'stack'>
export type Titles = Pick<CvInfo, 'title' | 'subtitle'>

