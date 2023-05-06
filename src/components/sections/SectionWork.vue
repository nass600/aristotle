<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeWork } from '@/types/resume'
import ResumeCard from '@/components/ResumeCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    work: {type: Array as PropType<(ResumeWork | ResumeWork[])[]>, required: true}
})
</script>

<template>
    <section class="section-work">
        <section-title title="Experience" icon="la-briefcase-solid"/>
        <div class="section-body section-body-cards">
            <ul class="work">
                <template v-for="job, i in work" v-bind:key="`job-${i}`">
                    <div class="card-group" v-if="Array.isArray(job)">
                        <resume-card
                            :class="{'card-last': i === job.length - 1}"
                            v-for="position, i in job"
                            v-bind:key="`position-${i}`"
                            :logo="position.logo"
                            :title="position.position"
                            :subtitle="position.company"
                            :start-date="position.startDate"
                            :end-date="position.endDate"
                            :body="position.summary.split('|')"
                            :link="position.website"
                            :tags="position.highlights"
                            :display-current="true"
                        />
                    </div>

                    <resume-card
                        v-if="!Array.isArray(job)"
                        :logo="job.logo"
                        :title="job.position"
                        :subtitle="job.company"
                        :start-date="job.startDate"
                        :end-date="job.endDate"
                        :body="job.summary.split('|')"
                        :link="job.website"
                        :tags="job.highlights"
                        :display-current="true"
                    />
                </template>
            </ul>
        </div>
    </section>
</template>

<style>
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
