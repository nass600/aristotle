// Utilities
import { defineStore } from 'pinia'
import { SectionName, Theme } from '@/types/config'

export interface ConfigSection {
    name: SectionName,
    title: string,
    icon: string,
    displayDuration?: boolean,
    displayBody?: boolean,
}

interface ConfigState {
    theme: Theme,
    blanks: number,
    sections: {
        sidebar: ConfigSection[],
        main: ConfigSection[],
    },
}

export const useConfigStore = defineStore('config', {
    persist: true,
    state: (): ConfigState => ({
        theme: Theme.JAVASCRIPT,
        blanks: 0,
        sections: {
            sidebar: [
                {
                    name: SectionName.CONTACT,
                    title: 'Contact',
                    icon: 'la-user-circle'
                },
                {
                    name: SectionName.SOCIAL,
                    title: 'Social',
                    icon: 'la-network-wired-solid'
                },
                {
                    name: SectionName.SKILLS,
                    title: 'Skills',
                    icon: 'la-tools-solid'
                },
                {
                    name: SectionName.EXPERTISE,
                    title: 'Expertise',
                    icon: 'la-brain-solid'
                },
                {
                    name: SectionName.TECHNICAL_SKILLS,
                    title: 'Technical Skills',
                    icon: 'la-tools-solid'
                },
                {
                    name: SectionName.SOFT_SKILLS,
                    title: 'Soft Skills',
                    icon: 'la-people-carry-solid'
                },
                {
                    name: SectionName.LANGUAGES,
                    title: 'Languages',
                    icon: 'la-language-solid'
                },
                {
                    name: SectionName.AWARDS,
                    title: 'Awards',
                    icon: 'la-medal-solid',
                    displayBody: true
                },
                {
                    name: SectionName.PUBLICATIONS,
                    title: 'Publications',
                    icon: 'la-bookmark-solid',
                    displayBody: true
                },
                {
                    name: SectionName.CERTIFICATES,
                    title: 'Certificates',
                    icon: 'la-certificate-solid'
                },
                {
                    name: SectionName.INTERESTS,
                    title: 'Interests',
                    icon: 'la-beer-solid'
                },
            ],
            main: [
                {
                    name: SectionName.SUMMARY,
                    title: 'Summary',
                    icon: 'la-paperclip-solid'
                },
                {
                    name: SectionName.WORK,
                    title: 'Experience',
                    icon: 'la-briefcase-solid',
                    displayDuration: true,
                    displayBody: true
                },
                {
                    name: SectionName.EDUCATION,
                    title: 'Education',
                    icon: 'la-book-solid',
                    displayDuration: true,
                    displayBody: true
                },
            ],
        }
    })
})
