export enum ResumeSocialNetworkName {
    SKYPE = 'skype',
    LINKEDIN = 'linkedin',
    TWITTER = 'twitter',
    GITHUB = 'github',
    STACKOVERFLOW = 'stackoverflow',
    SLIDESHARE = 'slideshare',
    STACKSHARE = 'stackshare',
    ANSIBLE = 'ansible',
    ANGELLIST = 'angellist',
    FACEBOOK = 'facebook',
    TIKTOK = 'tiktok',
    INSTAGRAM = 'instagram',
    YOUTUBE = 'youtube',
    TUMBLR = 'tumblr',
    PINTEREST = 'pinterest',
    TWITCH = 'twitch',
    REDDIT = 'reddit',
    VIMEO = 'vimeo',
    DRIBBBLE = 'dribbble',
    XING = 'xing',
    BITBUCKET = 'bitbucket',
    GITLAB = 'gitlab',
    QQ = 'qq',
    QUORA = 'quora',
    DISCORD = 'discord',
}

export enum ResumeSocialNetworkIcon {
    SKYPE = 'la-skype',
    LINKEDIN = 'la-linkedin',
    TWITTER = 'la-twitter',
    GITHUB = 'la-github',
    STACKOVERFLOW = 'la-stack-overflow',
    SLIDESHARE = 'la-slideshare',
    STACKSHARE = 'ri-stackshare-line',
    ANSIBLE = 'co-ansible',
    ANGELLIST = 'la-angellist',
    FACEBOOK = 'la-facebook',
    TIKTOK = 'co-tiktok',
    INSTAGRAM = 'la-instagram',
    YOUTUBE = 'la-youtube',
    TUMBLR = 'la-tumblr',
    PINTEREST = 'la-pinterest',
    TWITCH = 'la-twitch',
    REDDIT = 'la-reddit',
    VIMEO = 'la-vimeo',
    DRIBBBLE = 'la-dribbble',
    XING = 'la-xing',
    BITBUCKET = 'la-bitbucket',
    GITLAB = 'la-gitlab',
    QQ = 'la-qq',
    QUORA = 'la-quora',
    DISCORD = 'la-discord',
}

export enum ResumeLanguageName {
    SPANISH = 'Spanish',
    ENGLISH = 'English',
    GERMAN = 'German',
    FRENCH = 'French',
    ITALIAN = 'Italian',
    PORTUGUESE = 'Portuguese',
    JAPANESE = 'Japanese',
    RUSSIAN = 'Russian',
    CHINESE = 'Chinese',
    MANDARIN = 'Mandarin',
    KOREAN = 'Korean',
    HINDI = 'Hindi',
    BENGALI = 'Bengali',
    URDU = 'Urdu',
    INDONESIAN = 'Indonesian',
    TURKISH = 'Turkish',
    ARABIC = 'Arabic',
}

export enum ResumeLanguageIcon {
    SPANISH = 'fi-square-es',
    ENGLISH = 'fi-square-gb',
    GERMAN = 'fi-square-de',
    FRENCH = 'fi-square-fr',
    ITALIAN = 'fi-square-it',
    PORTUGUESE = 'fi-square-pt',
    JAPANESE = 'fi-square-jp',
    RUSSIAN = 'fi-square-ru',
    CHINESE = 'fi-square-cn',
    MANDARIN = 'fi-square-cn',
    KOREAN = 'fi-square-kr',
    HINDI = 'fi-square-in',
    BENGALI = 'fi-square-in',
    URDU = 'fi-square-pk',
    INDONESIAN = 'fi-square-id',
    TURKISH = 'fi-square-tr',
    ARABIC = 'fi-square-sa',
}

export interface ResumeProfile {
    network: string;
    username: string;
    url: string;
}

export interface ResumeLocation {
    address?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    region?: string;
}

export interface ResumeBasics {
    name: string;
    background?: string;
    picture?: string;
    email?: string;
    label: string;
    phone?: string;
    url?: string;
    summary?: string;
    location: ResumeLocation;
    profiles?: ResumeProfile[];
}

export interface ResumeWork {
    name: string;
    logo?: string;
    position: string;
    url?: string;
    startDate: string;
    endDate?: string;
    summary?: string[];
    highlights?: string[];
}

export interface ResumeProject {
    name: string;
    url?: string;
    startDate: string;
    endDate?: string;
    summary?: string[];
    highlights?: string[];
}

export interface ResumeVolunteer {
    organization: string;
    logo?: string;
    position: string;
    url?: string;
    startDate: string;
    endDate?: string;
    summary?: string[];
    highlights?: string[];
}

export interface ResumeEducation {
    institution: string;
    studyType?: string;
    area: string;
    url?: string;
    logo?: string;
    startDate: string;
    endDate?: string;
    courses?: string[];
    score?: string;
}

export interface ResumePublication {
    name: string;
    publisher: string;
    releaseDate: string;
    url?: string;
    summary?: string;
}

export interface ResumeReference {
    name: string;
    position?: string;
    date: string;
    picture?: string;
    reference: string;
}

export interface ResumeCertificate {
    name: string;
    issuer: string;
    date: string;
    url?: string;
}

export interface ResumeSkill {
    name: string;
    level?: string;
    keywords?: string[];
}

export interface ResumeLanguage {
    language: string;
    fluency?: string;
}

export interface ResumeAward {
    title: string;
    date: string;
    awarder: string;
    summary?: string;
}

export interface ResumeInterest {
    name: string;
    keywords?: string[];
}

export interface Resume {
    basics: ResumeBasics;
    work?: ResumeWork[];
    education?: ResumeEducation[];
    volunteer?: ResumeVolunteer[];
    publications?: ResumePublication[];
    certificates?: ResumeCertificate[];
    skills?: ResumeSkill[];
    expertise?: ResumeSkill[];
    technicalSkills?: ResumeSkill[];
    softSkills?: ResumeSkill[];
    languages?: ResumeLanguage[];
    awards?: ResumeAward[];
    interests?: ResumeInterest[];
    references?: ResumeReference[];
    projects?: ResumeProject[];
}
