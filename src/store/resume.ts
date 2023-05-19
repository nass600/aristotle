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
        removeSocial (index: number) {
            this.basics.profiles?.splice(index, 1)
        },
        addSkills () {
            this.skills?.push({name: '', level: ''})
        },
        removeSkills (index: number) {
            this.skills?.splice(index, 1)
        },
        addExpertise () {
            this.expertise?.push({name: '', level: ''})
        },
        removeExpertise (index: number) {
            this.expertise?.splice(index, 1)
        },
        addTechnicalSkills () {
            this.technicalSkills?.push({name: '', level: ''})
        },
        removeTechnicalSkills (index: number) {
            this.technicalSkills?.splice(index, 1)
        },
        addSoftSkills () {
            this.softSkills?.push({name: '', level: ''})
        },
        removeSoftSkills (index: number) {
            this.softSkills?.splice(index, 1)
        },
        addEducation () {
            this.education?.push({institution: '', area: '', startDate: '', courses: []})
        },
        removeEducation (index: number) {
            this.education?.splice(index, 1)
        },
        addWork () {
            this.work?.push({position: '', name: '', startDate: '', summary: []})
        },
        removeWork (index: number) {
            this.work?.splice(index, 1)
        },
        addAwards () {
            this.awards?.push({title: '', awarder: '', date: ''})
        },
        removeAwards (index: number) {
            this.awards?.splice(index, 1)
        },
        addCertificates () {
            this.certificates?.push({name: '', issuer: '', date: ''})
        },
        removeCertificates (index: number) {
            this.certificates?.splice(index, 1)
        },
        addVolunteer () {
            this.volunteer?.push({position: '', organization: '', startDate: '', summary: []})
        },
        removeVolunteer (index: number) {
            this.volunteer?.splice(index, 1)
        },
        addReferences () {
            this.references?.push({name: '', reference: '', date: ''})
        },
        removeReferences (index: number) {
            this.references?.splice(index, 1)
        },
        addProjects () {
            this.projects?.push({name: '', startDate: '', summary: []})
        },
        removeProjects (index: number) {
            this.projects?.splice(index, 1)
        },
        addPublications () {
            this.publications?.push({name: '', publisher: '', releaseDate: ''})
        },
        removePublications (index: number) {
            this.publications?.splice(index, 1)
        },
        addInterests () {
            this.interests?.push({name: ''})
        },
        removeInterests (index: number) {
            this.interests?.splice(index, 1)
        },
        addLanguages (language: string) {
            this.languages?.push({language})
        },
        removeLanguages (index: number) {
            this.languages?.splice(index, 1)
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
