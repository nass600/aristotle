<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumePublication } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Publications'},
    icon: {type: String, required: false, default: 'la-bookmark-solid'},
    items: {type: Array as PropType<ResumePublication[]>, required: true},
    displayBody: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-publications">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body section-body-cards">
            <resume-card
                v-for="item, i in items"
                v-bind:key="`publication-${i}`"
                :title="item.name"
                :subtitle="item.publisher"
                :start-date="item.releaseDate"
                :end-date="null"
                :body="item.summary?.split('|')"
                :link="item.url"
                :display-body="displayBody"
            />
        </div>
    </section>
</template>
