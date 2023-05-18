<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeVolunteer } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Volunteer'},
    icon: {type: String, required: false, default: 'la-hand-holding-heart-solid'},
    items: {type: Array as PropType<ResumeVolunteer[]>, required: true},
    displayDuration: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-volunteer">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body section-body-cards">
            <resume-card
                v-for="item, i in items"
                v-bind:key="`certificate-${i}`"
                :title="item.position"
                :subtitle="item.organization"
                :start-date="item.startDate"
                :end-date="item.endDate"
                :body="item.summary"
                :link="item.url"
                :tags="item.highlights"
                :display-duration="displayDuration"
            />
        </div>
    </section>
</template>
