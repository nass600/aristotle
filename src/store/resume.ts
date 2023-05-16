import { defineStore } from 'pinia'
import { ResumeSocialNetworkName, type Resume, type ResumeProfile, type ResumeWork, ResumeLanguage, ResumeLanguageName } from '@/types/resume'

export const useResumeStore = defineStore('resume', {
    persist: true,
    state: (): Resume => ({
        basics: {
            name: '',
            email: '',
            label: '',
            phone: '',
            location: {},
            profiles: []
        },
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
    getters: {
        availableSocialNetworks: (state: Resume): string[] => {
            const usedNetworks = state.basics.profiles?.map((profile: ResumeProfile) => profile.network.toUpperCase())
            return Object.keys(ResumeSocialNetworkName).filter((profile: string) => !usedNetworks?.includes(profile.toUpperCase()))
        },
        availableLanguages: (state: Resume): string[] => {
            const usedLanguages = state.languages?.map((language: ResumeLanguage) => language.language.toLowerCase())
            return Object.keys(ResumeLanguageName).filter((language: string) => !usedLanguages?.includes(language.toLowerCase()))
        },
        groupedJobs: (state: Resume): (ResumeWork | ResumeWork[])[] | undefined => {
            const groups = []
            let lastKey = undefined

            if (!state.work) {
                return state.work
            }

            for (const job of state.work) {
                if (job.company !== lastKey) {
                    groups.push([job])
                    lastKey = job.company
                } else {
                    groups[groups.length - 1].push(job)
                }
            }

            return groups.map((group: ResumeWork[]) => {
                if (group.length > 1) {
                    return group
                } else {
                    return group[0]
                }
            })
        }
    },
    actions: {
        addSocialProfile (network: ResumeSocialNetworkName) {
            if (!this.basics.profiles) {
                this.basics.profiles = []
            }

            this.basics.profiles?.push({network, username: '', url: ''})
        },
        addSkill (name: string) {
            this.skills?.push({name, level: ''})
        },
        addExpertise (name: string) {
            this.expertise?.push({name, level: ''})
        },
        addTechnicalSkill (name: string) {
            this.technicalSkills?.push({name, level: ''})
        },
        addSoftSkill (name: string) {
            this.softSkills?.push({name, level: ''})
        },
        addEducation (institution: string) {
            this.education?.push({institution, studyType: '', startDate: '', courses: ['']})
        },
        addWork (position: string) {
            this.work?.push({position, company: '', startDate: '', summary: ['']})
        },
        addAward (title: string) {
            this.awards?.push({title, awarder: '', date: ''})
        },
        addCertificate (name: string) {
            this.certificates?.push({name, issuer: '', date: ''})
        },
        addPublication (name: string) {
            this.publications?.push({name, publisher: '', releaseDate: ''})
        },
        addInterest (name: string) {
            this.interests?.push({name})
        },
        addLanguage (language: string) {
            console.log('addlanguage', language)
            this.languages?.push({language})
        },
        load (resume: Resume) {
            this.basics = resume.basics
            this.work = resume.work || []
            this.education = resume.education || []
            this.publications = resume.publications || []
            this.certificates = resume.certificates || []
            this.skills = resume.skills || []
            this.expertise = resume.expertise || []
            this.technicalSkills = resume.technicalSkills || []
            this.softSkills = resume.softSkills || []
            this.languages = resume.languages || []
            this.awards = resume.awards || []
            this.interests = resume.interests || []
        }
    }
})
