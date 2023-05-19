<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Summary'},
    icon: {type: String, required: false, default: 'la-paperclip-solid'},
    items: {type: String, required: true}
})
</script>

<template>
    <section class="section-summary">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body">
            <div class="summary" v-html="items"></div>
        </div>
    </section>
</template>

<style lang="scss">
.section-summary {
    .summary {
        padding: calc(var(--spacer) * 0.5);
    }
    p {
        text-align: justify;
        margin-bottom: 0;

        & + p {
            margin-top: calc(var(--spacer) * 0.5);
        }
    }
}
</style>
