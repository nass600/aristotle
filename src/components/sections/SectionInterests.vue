<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeInterest } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    interests: {type: Array as PropType<ResumeInterest[]>, required: true}
})
</script>

<template>
    <section class="section-interests">
        <section-title title="Interests" icon="la-beer-solid"/>
        <div class="section-body">
            <ul>
                <li
                    v-for="interest, i in interests"
                    v-bind:key="`interest-${i}`"
                    class="interest"
                >
                    <p>{{ interest.name }}</p>
                    <small class="secondary">{{ interest.keywords?.join(', ') }}</small>
                </li>
            </ul>
        </div>
    </section>
</template>

<style>
.section-interests {
    .interest {
        & + .interest {
            margin-top: var(--spacer);
        }
    }
}
</style>
