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
        <section-title :title="title" :icon="icon"/>
        <div class="section-body">
            <ul class="skills">
                <li v-for="item, i in items" v-bind:key="`skill-${i}`" class="icon-item flex-column align-stretch">
                    <div class="d-flex">
                        <span>{{ item.name }}</span>
                        <div class="ml-auto">
                            <span v-if="item.level && !isNaN(parseInt(item.level))">
                                <ov-icon
                                    v-for="index in 5" v-bind:key="`skill-${index}`"
                                    class="primary mr-0"
                                    :scale="0.75"
                                    :name="index <= parseInt(item.level) ? 'bi-circle-fill' : 'bi-circle'"
                                />
                            </span>
                            <span v-if="item.level && isNaN(parseInt(item.level))" class="skill-level">
                                {{ item.level }}
                            </span>
                        </div>
                    </div>
                    <div class="icon-item mt-1" v-if="item.keywords">
                        <ov-icon class="primary" :scale="0.75" name="la-tags-solid"/>
                        <small class="secondary">{{ item.keywords.join(', ') }}</small>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
