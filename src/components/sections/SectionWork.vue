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
            <ul class="work">
                <template v-for="item, i in items" v-bind:key="`job-${i}`">
                    <div class="card-group" v-if="Array.isArray(item)">
                        <resume-card
                            :class="{'card-last': i === item.length - 1}"
                            v-for="position, i in item"
                            v-bind:key="`position-${i}`"
                            :logo="position.logo"
                            :title="position.position"
                            :subtitle="position.company"
                            :start-date="position.startDate"
                            :end-date="position.endDate"
                            :body="position.summary"
                            :link="position.url"
                            :tags="position.highlights"
                            :display-current="true"
                            :display-body="displayBody"
                            :display-duration="displayDuration"
                        />
                    </div>

                    <resume-card
                        v-if="!Array.isArray(item)"
                        :logo="item.logo"
                        :title="item.position"
                        :subtitle="item.company"
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
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
.section-work {
    .card-group {
        .card {
            .card-aside::before {
                content: "";
                position: absolute;
                top: 0;
                bottom: calc(var(--spacer) * -2);
                left: 50%;
                width: var(--card-timeline-thickness);
                margin-left: calc((var(--card-timeline-thickness) / 2) * -1);
                background-color: var(--color-secondary);
            }

            & + .card {
                .card-aside {
                    &::before {
                        top: calc(var(--spacer) * -1);
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        width: var(--card-timeline-dots-size);
                        height: var(--card-timeline-dots-size);
                        border: var(--card-timeline-thickness) solid var(--color-secondary);
                        border-radius: 50%;
                        background-color: var(--color-background);
                        top: calc((var(--card-image-size) / 2) - (var(--card-timeline-dots-size) / 2) - var(--card-timeline-thickness));
                        left: 50%;
                        margin-left: calc((var(--card-timeline-dots-size) / 2) * -1);
                    }

                    .card-image {
                        display: none;
                    }
                }
            }
        }

        .card.card-last {
            .card-aside::before {
                bottom: 95%;
            }
        }
    }
}
</style>
