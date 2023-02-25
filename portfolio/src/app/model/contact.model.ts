export interface SocialMedia {
    order: number;
    link: string;
    materialIcon: string;
}

export class Contact {
    public headline: string;
    public subHeadline: string;
    public socialMediaList: SocialMedia[]; 
}
