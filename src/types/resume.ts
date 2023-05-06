export interface ResumeProfile {
    network: string;
    username: string;
    url: string;
}

export interface ResumeLocation {
    city?: string;
    countryCode?: string;
}

export interface ResumeBasics {
    name: string;
    background?: string;
    picture?: string;
    email: string;
    label: string;
    phone: string;
    website?: string;
    summary?: string;
    location?: ResumeLocation;
    profiles?: ResumeProfile[];
}

export interface ResumeWork {
    company: string;
    logo?: string;
    position: string;
    website?: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights?: string[];
}

export interface ResumeEducation {
    institution: string;
    studyType: string;
    logo?: string;
    area?: string;
    startDate: string;
    endDate?: string;
    courses?: string[];
}

export interface ResumePublication {
    name: string;
    publisher: string;
    releaseDate: string;
    website?: string;
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
}

export interface ResumeLanguage {
    name: string;
    level?: string;
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
    basics?: ResumeBasics;
    work?: (ResumeWork | ResumeWork[])[];
    education?: ResumeEducation[];
    publications?: ResumePublication[];
    certificates?: ResumeCertificate[];
    skills?: ResumeSkill[];
    expertise?: ResumeSkill[];
    technicalSkills?: ResumeSkill[];
    softSkills?: ResumeSkill[];
    languages?: ResumeLanguage[];
    awards?: ResumeAward[];
    interests?: ResumeInterest[];
}

export interface SocialIcons {
    [key: string]: string;
}

export interface LanguagesMap {
    [key: string]: string;
}
