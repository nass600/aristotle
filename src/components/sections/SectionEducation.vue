<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeEducation } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'
import ResumeCard from '@/components/ResumeCard.vue'
import { useResumeStore } from '@/store/resume'

defineProps({
    title: {type: String, required: false, default: 'Education'},
    icon: {type: String, required: false, default: 'la-book-solid'},
    items: {type: Array as PropType<ResumeEducation[]>, required: true},
    displayBody: {type: Boolean, required: false, default: true},
    displayDuration: {type: Boolean, required: false, default: true}
})
const resume = useResumeStore()
</script>

<template>
    <section class="section-education">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body section-body-cards">
            <template v-for="item, i in resume.groupedEducation" v-bind:key="`education-${i}`">
                <div class="card-group" v-if="Array.isArray(item)">
                    <resume-card
                        v-for="child, i in item"
                        v-bind:key="`study-${i}`"
                        :logo="child.logo"
                        :pre-title="child.studyType"
                        :title="child.area"
                        :subtitle="child.institution"
                        :start-date="child.startDate"
                        :end-date="child.endDate"
                        :body="child.courses"
                        :score="child.score"
                        :location="child.location"
                        :link="child.url"
                        :last="i === item.length - 1"
                        :display-current="true"
                        :display-body="displayBody"
                        :display-duration="displayDuration"
                    />
                </div>

                <resume-card
                    v-if="!Array.isArray(item)"
                    :logo="item.logo"
                    :pre-title="item.studyType"
                    :title="item.area"
                    :subtitle="item.institution"
                    :start-date="item.startDate"
                    :end-date="item.endDate"
                    :body="item.courses"
                    :score="item.score"
                    :location="item.location"
                    :link="item.url"
                    :display-current="true"
                    :display-body="displayBody"
                    :display-duration="displayDuration"
                />
            </template>
        </div>
    </section>
</template>
