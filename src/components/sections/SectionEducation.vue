<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeEducation } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'
import ResumeCard from '@/components/ResumeCard.vue'

defineProps({
    education: {type: Array as PropType<ResumeEducation[]>, required: true}
})
</script>

<template>
    <section class="section-education">
        <section-title title="Education" icon="la-book-solid"/>
        <div class="section-body section-body-cards">
            <ul class="education">
                <resume-card
                    v-for="item, i in education" v-bind:key="`education-${i}`"
                    :logo="item.logo"
                    :title="item.studyType"
                    :subtitle="item.institution"
                    :start-date="item.startDate"
                    :end-date="item.endDate"
                    :body="item.courses"
                    :display-current="true"
                />
            </ul>
        </div>
    </section>
</template>

<style>
.section-education {
}
</style>
