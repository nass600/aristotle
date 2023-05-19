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
                if (!item.name) {
                    continue
                }

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
                if (!item.institution) {
                    continue
                }
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
        removeItem (index: number, prop: string) {
            // @ts-ignore
            this[prop]?.splice(index, 1)
        },
        addSocial (network: ResumeSocialNetworkName) {
            if (!this.basics.profiles) {
                this.basics.profiles = []
            }

            this.basics.profiles?.push({network, username: '', url: ''})
        },
        removeSocial (index: number) {
            this.basics.profiles?.splice(index, 1)
        },
        addSkills (start = false, item = {name: '', level: ''}) {
            start ? this.skills?.unshift(item) : this.skills?.push(item)
        },
        addExpertise (start = false, item = {name: '', level: ''}) {
            start ? this.expertise?.unshift(item) : this.expertise?.push(item)
        },
        addTechnicalSkills (start = false, item = {name: '', level: ''}) {
            start ? this.technicalSkills?.unshift(item) : this.technicalSkills?.push(item)
        },
        addSoftSkills (start = false, item = {name: '', level: ''}) {
            start ? this.softSkills?.unshift(item) : this.softSkills?.push(item)
        },
        addEducation (start = false, item = {institution: '', area: '', startDate: '', courses: []}) {
            start ? this.education?.unshift(item) : this.education?.push(item)
        },
        addWork (start = false, item = {position: '', name: '', startDate: '', summary: []}) {
            start ? this.work?.unshift(item) : this.work?.push(item)
        },
        addAwards (start = false, item = {title: '', awarder: '', date: ''}) {
            start ? this.awards?.unshift(item) : this.awards?.push(item)
        },
        addCertificates (start = false, item = {name: '', issuer: '', date: ''}) {
            start ? this.certificates?.unshift(item) : this.certificates?.push(item)
        },
        addVolunteer (start = false, item = {position: '', organization: '', startDate: '', summary: []}) {
            start ? this.volunteer?.unshift(item) : this.volunteer?.push(item)
        },
        addReferences (start = false, item = {name: '', reference: '', date: ''}) {
            start ? this.references?.unshift(item) : this.references?.push(item)
        },
        addProjects (start = false, item = {name: '', startDate: '', summary: []}) {
            start ? this.projects?.unshift(item) : this.projects?.push(item)
        },
        addPublications (start = false, item = {name: '', publisher: '', releaseDate: ''}) {
            start ? this.publications?.unshift(item) : this.publications?.push(item)
        },
        addInterests (start = false, item = {name: ''}) {
            start ? this.interests?.unshift(item) : this.interests?.push(item)
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
