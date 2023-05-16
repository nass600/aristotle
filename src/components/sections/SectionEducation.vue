<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeEducation } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'
import ResumeCard from '@/components/ResumeCard.vue'

defineProps({
    title: {type: String, required: false, default: 'Education'},
    icon: {type: String, required: false, default: 'la-book-solid'},
    items: {type: Array as PropType<ResumeEducation[]>, required: true},
    displayBody: {type: Boolean, required: false, default: true},
    displayDuration: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-education">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body section-body-cards">
            <ul class="education">
                <resume-card
                    v-for="item, i in items" v-bind:key="`education-${i}`"
                    :logo="item.logo"
                    :title="item.studyType"
                    :subtitle="item.institution"
                    :start-date="item.startDate"
                    :end-date="item.endDate"
                    :link="item.url"
                    :body="item.courses"
                    :display-current="true"
                    :display-body="displayBody"
                    :display-duration="displayDuration"
                />
            </ul>
        </div>
    </section>
</template>
