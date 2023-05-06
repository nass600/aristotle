<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    summary: {type: String, required: true}
})
</script>

<template>
    <section class="section-summary">
        <section-title title="Summary" icon="la-paperclip-solid"/>
        <div class="section-body" v-html="summary"></div>
    </section>
</template>

<style>
.section-summary {
    & p {
        text-align: justify;
        margin-bottom: 0;

        & + p {
            margin-top: calc(var(--spacer) * 0.5);
        }
    }
}
</style>
