// Utilities
import { defineStore } from 'pinia'
import { SectionComponent, SectionName, Theme } from '@/types/config'
import { useResumeStore } from '@/store/resume'

export interface RenderSection extends Omit<ConfigSection, 'resumeKey'> {
    props: {
        items?: any,
        email?: string,
        phone?: string,
        url?: string,
        location?: any
    }
}

interface RenderSections {
    [key: string]: RenderSection[],
    sidebar: RenderSection[],
    main: RenderSection[]
}
export interface ConfigSection {
    name: SectionName,
    component: string,
    resumeKey: string,
    title: string,
    icon: string,
    displayDuration?: boolean,
    displayBody?: boolean,
}

interface ConfigSections {
    [key: string]: ConfigSection[],
    sidebar: ConfigSection[],
    main: ConfigSection[]
}

interface ConfigState {
    theme: Theme,
    blanks: number,
    sections: ConfigSections,
}

export const useConfigStore = defineStore('config', {
    persist: true,
    state: (): ConfigState => ({
        theme: Theme.JAVASCRIPT,
        blanks: 0,
        sections: {
            sidebar: [
                {
                    name: SectionName.BASICS,
                    component: SectionComponent[SectionName.BASICS],
                    resumeKey: 'basics',
                    title: 'Basic',
                    icon: 'la-user-circle'
                },
                {
                    name: SectionName.CONTACT,
                    component: SectionComponent[SectionName.CONTACT],
                    resumeKey: 'basics',
                    title: 'Contact',
                    icon: 'la-user-circle'
                },
                {
                    name: SectionName.SOCIAL,
                    component: SectionComponent[SectionName.SOCIAL],
                    resumeKey: 'basics.profiles',
                    title: 'Social',
                    icon: 'la-network-wired-solid'
                },
                {
                    name: SectionName.SKILLS,
                    component: SectionComponent[SectionName.SKILLS],
                    resumeKey: 'skills',
                    title: 'Skills',
                    icon: 'la-tools-solid'
                },
                {
                    name: SectionName.EXPERTISE,
                    component: SectionComponent[SectionName.EXPERTISE],
                    resumeKey: 'expertise',
                    title: 'Expertise',
                    icon: 'la-brain-solid'
                },
                {
                    name: SectionName.TECHNICAL_SKILLS,
                    component: SectionComponent[SectionName.TECHNICAL_SKILLS],
                    resumeKey: 'technicalSkills',
                    title: 'Technical Skills',
                    icon: 'la-tools-solid'
                },
                {
                    name: SectionName.SOFT_SKILLS,
                    component: SectionComponent[SectionName.SOFT_SKILLS],
                    resumeKey: 'softSkills',
                    title: 'Soft Skills',
                    icon: 'la-people-carry-solid'
                },
                {
                    name: SectionName.LANGUAGES,
                    component: SectionComponent[SectionName.LANGUAGES],
                    resumeKey: 'languages',
                    title: 'Languages',
                    icon: 'la-language-solid'
                },
                {
                    name: SectionName.AWARDS,
                    component: SectionComponent[SectionName.AWARDS],
                    resumeKey: 'awards',
                    title: 'Awards',
                    icon: 'la-medal-solid',
                    displayBody: true
                },
                {
                    name: SectionName.PUBLICATIONS,
                    component: SectionComponent[SectionName.PUBLICATIONS],
                    resumeKey: 'publications',
                    title: 'Publications',
                    icon: 'la-bookmark-solid',
                    displayBody: true
                },
                {
                    name: SectionName.CERTIFICATES,
                    component: SectionComponent[SectionName.CERTIFICATES],
                    resumeKey: 'certificates',
                    title: 'Certificates',
                    icon: 'la-certificate-solid'
                },
                {
                    name: SectionName.INTERESTS,
                    component: SectionComponent[SectionName.INTERESTS],
                    resumeKey: 'interests',
                    title: 'Interests',
                    icon: 'la-beer-solid'
                },
            ],
            main: [
                {
                    name: SectionName.SUMMARY,
                    component: SectionComponent[SectionName.SUMMARY],
                    resumeKey: 'basics.summary',
                    title: 'Summary',
                    icon: 'la-paperclip-solid'
                },
                {
                    name: SectionName.WORK,
                    component: SectionComponent[SectionName.WORK],
                    resumeKey: 'work',
                    title: 'Experience',
                    icon: 'la-briefcase-solid',
                    displayDuration: true,
                    displayBody: true
                },
                {
                    name: SectionName.EDUCATION,
                    component: SectionComponent[SectionName.EDUCATION],
                    resumeKey: 'education',
                    title: 'Education',
                    icon: 'la-book-solid',
                    displayDuration: true,
                    displayBody: true
                },
                {
                    name: SectionName.VOLUNTEER,
                    component: SectionComponent[SectionName.VOLUNTEER],
                    resumeKey: 'volunteer',
                    title: 'Volunteer',
                    icon: 'la-hand-holding-heart-solid',
                    displayDuration: true,
                    displayBody: true
                },
                {
                    name: SectionName.PROJECTS,
                    component: SectionComponent[SectionName.PROJECTS],
                    resumeKey: 'projects',
                    title: 'Projects',
                    icon: 'la-laptop-solid',
                    displayDuration: true,
                    displayBody: true
                },
                {
                    name: SectionName.REFERENCES,
                    component: SectionComponent[SectionName.REFERENCES],
                    resumeKey: 'references',
                    title: 'References',
                    icon: 'la-user-check-solid'
                },
            ],
        }
    }),
    getters: {
        renderSections: (state: ConfigState): RenderSections => {
            const resume = useResumeStore()
            const result: RenderSections = {'sidebar': [], 'main': []}

            for (const sectionName of Object.values(SectionName)) {
                for (const panel of ['sidebar', 'main']) {
                    const found = state.sections[panel].find((section: ConfigSection) => section.name === sectionName)

                    if (!found) {
                        continue
                    }
                    // @ts-ignore
                    const value = found.resumeKey.split('.').reduce((a, b) => a[b], resume)

                    if ((!Array.isArray(value) && !value) || (Array.isArray(value) && value.length === 0)) {
                        continue
                    }

                    const {resumeKey, ...rest} = found

                    if (sectionName === SectionName.BASICS) {
                        // @ts-ignore
                        if (!value.name && !value.label && !value.background && !value.picture) { continue }

                        result[panel].push({
                            ...rest,
                            props: { // @ts-ignore
                                name: value.name, // @ts-ignore
                                label: value.label, // @ts-ignore
                                background: value.background, // @ts-ignore
                                picture: value.picture,
                            }
                        })
                    } else if (sectionName === SectionName.CONTACT) {
                        // @ts-ignore
                        if (!value.email && !value.phone && !value.url && Object.keys(value.location).length === 0) { continue }

                        result[panel].push({
                            ...rest,
                            props: { // @ts-ignore
                                email: value.email, // @ts-ignore
                                phone: value.phone, // @ts-ignore
                                url: value.url, // @ts-ignore
                                location: value.location,
                            }
                        })
                    } else {
                        result[panel].push({...rest, props: {items: value}})
                    }
                }
            }

            return result
        },
        formSections: (state: ConfigState) => {
            const result = []

            for (const sectionName of Object.values(SectionName)) {
                for (const panel of ['sidebar', 'main']) {
                    const found = state.sections[panel].find((section: ConfigSection) => section.name === sectionName)

                    if (!found) {
                        continue
                    }

                    result.push(found)
                }
            }
            return result
        }
    }
})
