<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeSkill } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Skills'},
    icon: {type: String, required: false, default: 'la-tools-solid'},
    skills: {type: Array as PropType<ResumeSkill[]>, required: true}
})
</script>

<template>
    <section class="section-skills">
        <section-title :title="title" :icon="icon"></section-title>
        <div class="section-body">
            <ul class="skills">
                <li v-for="skill, i in skills" v-bind:key="`skill-${i}`" class="skill">
                    <small>{{ skill.name }}</small>
                    <div v-if="skill.level" class="skill-level">
                        <template v-for="index in 5" v-bind:key="`skill-${index}`">
                            <ov-icon
                                class="primary"
                                :scale="0.75"
                                :name="index <= parseInt(skill.level) ? 'bi-circle-fill' : 'bi-circle'"
                            />
                        </template>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style>
.section-skills {
    .skills {
        .skill {
            display: flex;
            align-items: center;

            .skill-level {
                margin-left: auto;
                display: flex;
                align-items: center;
            }

            & + .skill {
                margin-top: calc(var(--spacer) * 0.25);
            }
        }
    }
}
</style>
