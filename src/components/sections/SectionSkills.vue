<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeSkill } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Skills'},
    icon: {type: String, required: false, default: 'la-tools-solid'},
    items: {type: Array as PropType<ResumeSkill[]>, required: true}
})
</script>

<template>
    <section class="section-skills">
        <section-title :title="title" :icon="icon"></section-title>
        <div class="section-body">
            <ul class="skills">
                <li v-for="item, i in items" v-bind:key="`skill-${i}`" class="skill d-flex flex-column">
                    <div class="d-flex">
                        <small>{{ item.name }}</small>
                        <div v-if="item.level && !isNaN(parseInt(item.level))" class="skill-level">
                            <template v-for="index in 5" v-bind:key="`skill-${index}`">
                                <ov-icon
                                    class="primary"
                                    :scale="0.75"
                                    :name="index <= parseInt(item.level) ? 'bi-circle-fill' : 'bi-circle'"
                                />
                            </template>
                        </div>
                        <div v-if="item.level && isNaN(parseInt(item.level))" class="skill-level">
                            <small>{{ item.level }}</small>
                        </div>
                    </div>
                    <div class="card-tags" v-if="item.keywords">
                        <ov-icon class="primary mr-1" :scale="0.6" name="la-tags-solid"/>
                        <small class="card-tags-text secondary">{{ item.keywords.join(', ') }}</small>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
.section-skills {
    .skills {
        .skill {
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
