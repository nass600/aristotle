import { defineStore } from 'pinia'
import { ResumeSocialNetworkName, type Resume, type ResumeProfile, type ResumeWork, ResumeLanguage, ResumeLanguageName, ResumeEducation } from '@/types/resume'

export const useResumeStore = defineStore('resume', {
    persist: true,
    state: (): Resume => ({
        basics: {
            name: '',
            label: '',
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
        volunteer: [],
        projects: [],
        references: [],
    }),
    getters: {
        availableSocialNetworks: (state: Resume): string[] => {
            const usedNetworks = state.basics.profiles?.map((profile: ResumeProfile) => profile.network.toUpperCase())
            return Object
                .keys(ResumeSocialNetworkName)
                .filter((profile: string) => !usedNetworks?.includes(profile.toUpperCase()))
                .sort((a, b) => a > b ? 1 : -1)
        },
        availableLanguages: (state: Resume): string[] => {
            const usedLanguages = state.languages?.map((language: ResumeLanguage) => language.language.toLowerCase())
            return Object
                .keys(ResumeLanguageName)
                .filter((language: string) => !usedLanguages?.includes(language.toLowerCase()))
                .sort((a, b) => a > b ? 1 : -1)
        },
        groupedJobs: (state: Resume): (ResumeWork | ResumeWork[])[] | undefined => {
            const groups = []
            let lastKey = undefined

            if (!state.work) {
                return state.work
            }

            for (const item of state.work) {
                if (item.name !== lastKey) {
                    groups.push([item])
                    lastKey = item.name
                } else {
                    groups[groups.length - 1].push(item)
                }
            }

            return groups.map((group: ResumeWork[]) => {
                if (group.length > 1) {
                    return group
                } else {
                    return group[0]
                }
            })
        },
        groupedEducation: (state: Resume): (ResumeEducation | ResumeEducation[])[] | undefined => {
            const groups = []
            let lastKey = undefined

            if (!state.education) {
                return state.education
            }

            for (const item of state.education) {
                if (item.institution !== lastKey) {
                    groups.push([item])
                    lastKey = item.institution
                } else {
                    groups[groups.length - 1].push(item)
                }
            }

            return groups.map((group: ResumeEducation[]) => {
                if (group.length > 1) {
                    return group
                } else {
                    return group[0]
                }
            })
        }
    },
    actions: {
        addSocial (network: ResumeSocialNetworkName) {
            if (!this.basics.profiles) {
                this.basics.profiles = []
            }

            this.basics.profiles?.push({network, username: '', url: ''})
        },
        addSkills () {
            this.skills?.push({name: '', level: ''})
        },
        addExpertise () {
            this.expertise?.push({name: '', level: ''})
        },
        addTechnicalSkills () {
            this.technicalSkills?.push({name: '', level: ''})
        },
        addSoftSkills () {
            this.softSkills?.push({name: '', level: ''})
        },
        addEducation () {
            this.education?.push({institution: '', area: '', startDate: '', courses: []})
        },
        addWork () {
            this.work?.push({position: '', name: '', startDate: '', summary: []})
        },
        addAwards () {
            this.awards?.push({title: '', awarder: '', date: ''})
        },
        addCertificates () {
            this.certificates?.push({name: '', issuer: '', date: ''})
        },
        addVolunteer () {
            this.volunteer?.push({position: '', organization: '', startDate: '', summary: []})
        },
        addReferences () {
            this.references?.push({name: '', reference: '', date: ''})
        },
        addProjects () {
            this.projects?.push({name: '', startDate: '', summary: []})
        },
        addPublications () {
            this.publications?.push({name: '', publisher: '', releaseDate: ''})
        },
        addInterests () {
            this.interests?.push({name: ''})
        },
        addLanguages (language: string) {
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
            this.volunteer = resume.volunteer || []
            this.projects = resume.projects || []
            this.references = resume.references || []
        }
    }
})
