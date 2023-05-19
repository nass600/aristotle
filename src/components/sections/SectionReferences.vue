<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeReference } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Volunteer'},
    icon: {type: String, required: false, default: 'la-hand-holding-heart-solid'},
    items: {type: Array as PropType<ResumeReference[]>, required: true},
    displayDuration: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-references">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body section-body-cards">
            <resume-card
                v-for="item, i in items"
                v-bind:key="`certificate-${i}`"
                :logo="item.picture"
                :title="item.name"
                :subtitle="item.position"
                :start-date="item.date"
                :end-date="null"
                :quote="item.reference"
                :display-duration="displayDuration"
            />
        </div>
    </section>
</template>
