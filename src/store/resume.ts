import { defineStore } from 'pinia'
import type { Resume } from '@/types/resume'

export const useResumeStore = defineStore('resume', {
    state: (): Resume => ({
        basics: undefined,
        work: [],
        education: [],
        publications: [],
        certificates: [],
        skills: [],
        expertise: [],
        technicalSkills: [],
        softSkills: [],
        languages: [],
        awards: [],
        interests: [],
    }),
    actions: {
        loadResume (resume: Resume) {
            this.basics = resume.basics
            this.work = resume.work
            this.education = resume.education
            this.publications = resume.publications
            this.certificates = resume.certificates
            this.skills = resume.skills
            this.expertise = resume.expertise
            this.technicalSkills = resume.technicalSkills
            this.softSkills = resume.softSkills
            this.languages = resume.languages
            this.awards = resume.awards
            this.interests = resume.interests
        }
    }
})
