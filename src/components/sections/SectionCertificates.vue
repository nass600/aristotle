<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeCertificate } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    certificates: {type: Array as PropType<ResumeCertificate[]>, required: true},
    displayDuration: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-certificates">
        <section-title title="Certificates" icon="la-certificate-solid"></section-title>
        <div class="section-body section-body-cards">
            <resume-card
                v-for="publication, i in certificates"
                v-bind:key="`publication-${i}`"
                :title="publication.name"
                :subtitle="publication.issuer"
                :start-date="publication.date"
                :link="publication.url"
                :display-end-date="false"
                :display-duration="displayDuration"
            />
        </div>
    </section>
</template>

<style>
.section-publications {
}
</style>
