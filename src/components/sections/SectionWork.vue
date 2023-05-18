<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeWork } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Experience'},
    icon: {type: String, required: false, default: 'la-briefcase-solid'},
    items: {type: Array as PropType<(ResumeWork | ResumeWork[])[]>, required: true},
    displayBody: {type: Boolean, required: false, default: true},
    displayDuration: {type: Boolean, required: false, default: true}
})
</script>

<template>
    <section class="section-work">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body section-body-cards">
            <template v-for="item, i in items" v-bind:key="`job-${i}`">
                <div class="card-group" v-if="Array.isArray(item)">
                    <resume-card
                        :class="{'card-last': i === item.length - 1}"
                        v-for="child, i in item"
                        v-bind:key="`position-${i}`"
                        :logo="child.logo"
                        :title="child.position"
                        :subtitle="child.name"
                        :start-date="child.startDate"
                        :end-date="child.endDate"
                        :body="child.summary"
                        :link="child.url"
                        :tags="child.highlights"
                        :display-current="true"
                        :display-body="displayBody"
                        :display-duration="displayDuration"
                    />
                </div>

                <resume-card
                    v-if="!Array.isArray(item)"
                    :logo="item.logo"
                    :title="item.position"
                    :subtitle="item.name"
                    :start-date="item.startDate"
                    :end-date="item.endDate"
                    :body="item.summary"
                    :link="item.url"
                    :tags="item.highlights"
                    :display-current="true"
                    :display-body="displayBody"
                    :display-duration="displayDuration"
                />
            </template>
        </div>
    </section>
</template>
