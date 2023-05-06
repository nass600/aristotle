<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumePublication } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    publications: {type: Array as PropType<ResumePublication[]>, required: true},
    displayDuration: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-publications">
        <section-title title="Publications" icon="la-bookmark-solid"></section-title>
        <div class="section-body section-body-cards">
            <resume-card
                v-for="publication, i in publications"
                v-bind:key="`publication-${i}`"
                :title="publication.name"
                :subtitle="publication.publisher"
                :start-date="publication.releaseDate"
                :link="publication.website"
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
