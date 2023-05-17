<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeCertificate } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Certificates'},
    icon: {type: String, required: false, default: 'la-certificate-solid'},
    items: {type: Array as PropType<ResumeCertificate[]>, required: true},
    displayDuration: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-certificates">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body section-body-cards">
            <resume-card
                v-for="item, i in items"
                v-bind:key="`certificate-${i}`"
                :title="item.name"
                :subtitle="item.issuer"
                :start-date="item.date"
                :end-date="null"
                :link="item.url"
                :display-duration="displayDuration"
            />
        </div>
    </section>
</template>
