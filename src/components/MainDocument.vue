<script setup lang="ts">
import SectionBasic from '@/components/sections/SectionBasic.vue'
import SectionSummary from '@/components/sections/SectionSummary.vue'
import SectionWork from '@/components/sections/SectionWork.vue'
import SectionCertificates from '@/components/sections/SectionCertificates.vue'
import SectionEducation from '@/components/sections/SectionEducation.vue'
import SectionPublications from '@/components/sections/SectionPublications.vue'
import SectionSkills from '@/components/sections/SectionSkills.vue'
import SectionAwards from '@/components/sections/SectionAwards.vue'
import SectionInterests from '@/components/sections/SectionInterests.vue'
import SectionLanguages from '@/components/sections/SectionLanguages.vue'
import SectionContact from '@/components/sections/SectionContact.vue'
import SectionSocial from '@/components/sections/SectionSocial.vue'
import { ref, computed, onMounted } from 'vue'
import { useResumeStore } from '@/store/resume'
import { useConfigStore } from '@/store/config'
import { SectionName } from '@/types/config'
import { ConfigSection } from '@/store/config'

defineProps({
    msg: String
})

const el = ref()
const resume = useResumeStore()
const config = useConfigStore()
// const addPageBreak = (element: Element) => {
//     const tempDiv = document.createElement('div');
//     const instance = createApp(PageBreak).mount(tempDiv);

//     document.body.appendChild(instance.$el);
//     element.parentNode?.insertBefore(instance.$el, element)
// }

interface Result {
    component: any,
    props: object
}

const sidebarSections = computed(() => prepareSections(config.sections.sidebar))

const mainSections = computed(() => prepareSections(config.sections.main))

const prepareSections = (sections: ConfigSection[]): Result[] => {
    const results: Result[] = []

    for (const section of sections) {
        const item = {title: section.title, icon: section.icon}
        switch (section.name) {
        case SectionName.CONTACT:
            if (!resume.basics || !resume.basics.email) {
                break
            }
            results.push({
                component: SectionContact,
                props: {
                    ...item,
                    email: resume.basics?.email,
                    phone: resume.basics?.phone,
                    url: resume.basics?.url,
                    location: resume.basics?.location,
                }
            })
            break
        case SectionName.SOCIAL:
            if (!resume.basics?.profiles || resume.basics.profiles.length === 0) { break }
            results.push({component: SectionSocial, props: {...item, items: resume.basics?.profiles}})
            break
        case SectionName.SKILLS:
            if (!resume.skills || resume.skills.length === 0) { break }
            results.push({component: SectionSkills, props: {...item, items: resume.skills}})
            break
        case SectionName.EXPERTISE:
            if (!resume.expertise || resume.expertise.length === 0) { break }
            results.push({component: SectionSkills, props: {...item, items: resume.expertise}})
            break
        case SectionName.TECHNICAL_SKILLS:
            if (!resume.technicalSkills || resume.technicalSkills.length === 0) { break }
            results.push({component: SectionSkills, props: {...item, items: resume.technicalSkills}})
            break
        case SectionName.SOFT_SKILLS:
            if (!resume.softSkills || resume.softSkills.length === 0) { break }
            results.push({component: SectionSkills, props: {...item, items: resume.softSkills}})
            break
        case SectionName.LANGUAGES:
            if (!resume.languages || resume.languages.length === 0) { break }
            results.push({component: SectionLanguages, props: {...item, items: resume.languages}})
            break
        case SectionName.AWARDS:
            if (!resume.awards || resume.awards.length === 0) { break }
            results.push({component: SectionAwards, props: {...item, items: resume.awards, displayBody: section.displayBody}})
            break
        case SectionName.PUBLICATIONS:
            if (!resume.publications || resume.publications.length === 0) { break }
            results.push({component: SectionPublications, props: {...item, items: resume.publications, displayBody: section.displayBody}})
            break
        case SectionName.CERTIFICATES:
            if (!resume.certificates || resume.certificates.length === 0) { break }
            results.push({component: SectionCertificates, props: {...item, items: resume.certificates}})
            break
        case SectionName.INTERESTS:
            if (!resume.interests || resume.interests.length === 0) { break }
            results.push({component: SectionInterests, props: {...item, items: resume.interests}})
            break
        case SectionName.SUMMARY:
            if (!resume.basics?.summary) { break }
            results.push({component: SectionSummary, props: {...item, items: resume.basics?.summary}})
            break
        case SectionName.WORK:
            if (!resume.work || resume.work.length === 0) { break }
            results.push({component: SectionWork, props: {...item, items: resume.groupedJobs, displayBody: section.displayBody, displayDuration: section.displayDuration}})
            break
        case SectionName.EDUCATION:
            if (!resume.education || resume.education.length === 0) { break }
            results.push({component: SectionEducation, props: {...item, items: resume.education, displayBody: section.displayBody, displayDuration: section.displayDuration}})
            break
        }
    }

    return results

}

onMounted(() => {

    // const element = document.elementFromPoint(mainDocument.clientWidth + 100, pageHeight)
    // addPageBreak(element)
})
</script>

<template>
    <div
        ref="el"
        id="main-document"
        class="main-document"
    >
        <div class="sidebar">
            <section-basic
                v-if="resume.basics"
                :name="resume.basics.name"
                :background="resume.basics.background"
                :picture="resume.basics.picture"
                :label="resume.basics.label"
            />
            <component
                v-for="section, i in sidebarSections"
                v-bind:key="`sidebar-section-${i}`"
                :is="section.component"
                v-bind="section.props"
            />
        </div>
        <div class="content">
            <component
                v-for="section, i in mainSections"
                v-bind:key="`main-section-${i}`"
                :is="section.component"
                v-bind="section.props"
            />
            <div v-for="index in config.blanks" :key="index" class="br-print">&nbsp;</div>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/styles/settings.scss';

:root {
    --c-print-multiplier: 1.5;
    --c-font-size-base: 12px;
    --c-page-width: 794px;
    --c-page-height: 1121px;
    --spacer: 1.5em;
}

/* color palette */
:root {
    --background: #181818;
    --color: white;
}

/* fonts */
:root {
    --font: 'Maven Pro', sans-serif;
    --h1-font-size: 1.6em;
    --h2-font-size: 1.4em;
    --h3-font-size: 1.2em;
    --h4-font-size: 1.1em;
    --h5-font-size: 1em;
    --small-font-size: 0.8em;
}

/* app */
:root {
    --avatar-size: calc(var(--sidebar-width) * 0.6);
    --sidebar-width: calc(var(--page-width) * 0.275);
    --icon-bg-size: 2.5em;
    --card-image-size: 3em;
    --card-timeline-thickness: 0.1em;
    --card-timeline-dots-size: calc(0.8em + var(--card-timeline-thickness));
    --badge-bg: #388e3c;
    --badge-color: white;
}

@media screen {
    :root {
        --screen-multiplier: 1.5;
        --font-size-base: calc(var(--c-font-size-base) * var(--screen-multiplier));
        --page-width: calc(var(--c-page-width) * var(--screen-multiplier));
        --page-height: calc(var(--c-page-height) * var(--screen-multiplier));
    }
}

@media #{map-get(settings.$display-breakpoints, 'lg-and-down')} {
    :root {
        --screen-multiplier: 1;
        --font-size-base: calc(var(--c-font-size-base) * var(--screen-multiplier));
        --page-width: calc(var(--c-page-width) * var(--screen-multiplier));
        --page-height: calc(var(--c-page-height) * var(--screen-multiplier));
    }
}

@media print {
    :root {
        --screen-multiplier: var(--c-print-multiplier);
        --font-size-base: calc(var(--c-font-size-base) * var(--screen-multiplier));
        --page-width: calc(var(--c-page-width) * var(--screen-multiplier));
        --page-height: calc(var(--c-page-height) * var(--screen-multiplier));
    }
}

.main-document {
    width: var(--page-width);
    // min-height: var(--page-height);
    line-height: 1.4;
    display: flex;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    font-size: var(--font-size-base);
    font-family: var(--font);
    font-weight: normal;

    .br-print {
        display: none;
        height: 9pt;
    }

    .sidebar {
        --color-background: rgb(var(--v-theme-doc-sidebar-background));
        --color-text: rgb(var(--v-theme-doc-sidebar-text));
        --color-primary: rgb(var(--v-theme-doc-sidebar-primary));
        --color-secondary: rgb(var(--v-theme-doc-sidebar-secondary));
        --color-tertiary: rgb(var(--v-theme-doc-sidebar-tertiary));
        background-color: var(--color-background);
        color: var(--color-text);
        flex: 0 0 var(--sidebar-width);
        width: var(--sidebar-width);

        & a {
            color: var(--color-text);
        }

        & p {
            font-size: calc(var(--c-font-size-base) * 1.3);
        }
    }

    .content {
        --color-background: rgb(var(--v-theme-doc-content-background));
        --color-text: rgb(var(--v-theme-doc-content-text));
        --color-primary: rgb(var(--v-theme-doc-content-primary));
        --color-secondary: rgb(var(--v-theme-doc-content-secondary));
        --color-tertiary: rgb(var(--v-theme-doc-content-tertiary));
        flex: 1;
        background-color: var(--color-background);
        color: var(--color-text);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        padding: 0;
        margin: 0;
        & li {
            list-style: none;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        text-transform: uppercase;
        margin-top: 0;
        font-weight: normal;
    }

    h1 {
        font-size: var(--h1-font-size);
    }

    h2 {
        font-size: var(--h2-font-size);
    }

    h3 {
        font-size: var(--h3-font-size);
    }

    h4 {
        font-size: var(--h4-font-size);
    }

    h5 {
        font-size: var(--h5-font-size);
    }

    [class^="section-"] {
        .section-body {
            padding: var(--spacer);
            margin: 0;
        }
        .section-body-cards {
            padding: 0;
        }
    }

    .primary {
        color: var(--color-primary);
    }
    .secondary {
        color: var(--color-secondary);
    }
    .tertiary {
        color: var(--color-tertiary);
    }
}

@page {
    // size: A4;
    margin: 0;
}
@page :left {
    margin-left: 0;
}

@page :right {
    margin-left: 0;
}

@media print {
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: var(--font);
        font-size: var(--font-size-base);
    }

    .main-document {
        box-shadow: none;
        overflow: hidden;

        .br-print {
            display: block;
        }
    }

    .section-summary,
    .section-languages,
    .card,
    .sidebar [class^="section-"],
    section .title,
    p {
        page-break-inside: avoid;
    }
}
</style>
