<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeAward } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    awards: {type: Array as PropType<ResumeAward[]>, required: true},
    displayDuration: {type: Boolean, required: false, default: true},
    displayBody: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-awards">
        <section-title title="Awards" icon="la-medal-solid"/>
        <div class="section-body section-body-cards">
            <resume-card
                v-for="award, i in awards"
                v-bind:key="`award-${i}`"
                :title="award.title"
                :subtitle="award.awarder"
                :start-date="award.date"
                :body="award.summary?.split('|')"
                :display-duration="displayDuration"
                :display-end-date="false"
                :display-body="displayBody"
            />
        </div>
    </section>
</template>

<style>
.section-awards {
}
</style>
