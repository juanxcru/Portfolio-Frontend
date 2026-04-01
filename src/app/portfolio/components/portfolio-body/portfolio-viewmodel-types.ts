import { CvInfo } from '../../store/cvinfo.store';

export type ContactInfo = Pick<CvInfo, 
                        'availability' |
                        'avail_short'|
                        'location'|
                        'email'>;
export type SocialLinks = Pick<CvInfo, 'github' | 'linkedin'| 'email'>;
export type Stack = Pick<CvInfo, 'stack'>;
export type Titles = Pick<CvInfo, 'title' | 'subtitle'>;
export type BioData = Pick<CvInfo, 'bio1' | 'bio2' |'bio3'>;
export type Experience = Pick<CvInfo, 'experience'>;

