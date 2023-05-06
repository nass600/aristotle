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
import { getPageHeight } from '@/utils'

defineProps({
    msg: String
})

const el = ref()
const store = useResumeStore()
const pageHeight = computed(() => {
    if (!el.value) {
        return
    }
    return getPageHeight(el.value) + 'px'
})
// const addPageBreak = (element: Element) => {
//     const tempDiv = document.createElement('div');
//     const instance = createApp(PageBreak).mount(tempDiv);

//     document.body.appendChild(instance.$el);
//     element.parentNode?.insertBefore(instance.$el, element)
// }

onMounted(() => {
    el.value.style.height = el.value.style.minHeight = getPageHeight(el.value) + 'px'

    // const element = document.elementFromPoint(mainDocument.clientWidth + 100, pageHeight)
    // addPageBreak(element)
})
</script>

<template>
    <div
        ref="el"
        id="main-document"
        class="main-document theme-javascript"
        :style="{height: pageHeight, minHeight: pageHeight}"
    >
        <div class="sidebar">
            <section-basic
                v-if="store.basics"
                :name="store.basics.name"
                :background="store.basics.background"
                :picture="store.basics.picture"
                :label="store.basics.label"
            />
            <section-contact
                v-if="store.basics"
                :email="store.basics.email"
                :phone="store.basics.phone"
                :website="store.basics.website"
                :location="store.basics.location"
            />
            <section-social v-if="store.basics?.profiles" :profiles="store.basics?.profiles"/>
            <section-skills v-if="store.skills" :skills="store.skills"/>
            <section-skills v-if="store.expertise" :skills="store.expertise" title="Expertise" icon="la-brain-solid"/>
            <section-skills v-if="store.technicalSkills" :skills="store.technicalSkills" title="Technical Skills"/>
            <section-skills v-if="store.softSkills" :skills="store.softSkills" title="Soft Skills" icon="la-people-carry-solid"/>
            <section-languages v-if="store.languages" :languages="store.languages"/>
            <section-awards v-if="store.awards" :awards="store.awards" :display-duration="false" :display-body="false"/>
            <section-publications v-if="store.publications" :publications="store.publications" :display-duration="false"/>
            <section-interests v-if="store.interests" :interests="store.interests"/>
            <section-certificates v-if="store.certificates" :certificates="store.certificates" :display-duration="false"/>
        </div>
        <div class="content">
            <section-summary v-if="store.basics?.summary" :summary="store.basics?.summary"/>
            <section-work v-if="store.work" :work="store.work"/>
            <section-education v-if="store.education" :education="store.education"/>
        </div>
    </div>
</template>

<style lang="scss">
.main-document {
    width: var(--page-width);
    // min-height: var(--page-height);
    line-height: 1.4;
    display: flex;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    font-size: var(--font-size-base);
    font-family: var(--font);
    font-weight: normal;

    .sidebar {
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
        // margin-bottom: var(--spacer);
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
</style>
