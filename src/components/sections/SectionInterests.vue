<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeInterest } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Interests'},
    icon: {type: String, required: false, default: 'la-beer-solid'},
    items: {type: Array as PropType<ResumeInterest[]>, required: true}
})
</script>

<template>
    <section class="section-interests">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body">
            <ul>
                <li
                    v-for="item, i in items"
                    v-bind:key="`interest-${i}`"
                    class="interest"
                >
                    <p>{{ item.name }}</p>
                    <small class="secondary">{{ item.keywords?.join(', ') }}</small>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
.section-interests {
    .interest {
        & + .interest {
            margin-top: var(--spacer);
        }
    }
}
</style>
