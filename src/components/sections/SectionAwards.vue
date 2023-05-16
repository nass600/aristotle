<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeAward } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Awards'},
    icon: {type: String, required: false, default: 'la-medal-solid'},
    items: {type: Array as PropType<ResumeAward[]>, required: true},
    displayBody: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-awards">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body section-body-cards">
            <resume-card
                v-for="item, i in items"
                v-bind:key="`award-${i}`"
                :title="item.title"
                :subtitle="item.awarder"
                :start-date="item.date"
                :end-date="null"
                :body="item.summary?.split('|')"
                :display-body="displayBody"
            />
        </div>
    </section>
</template>
