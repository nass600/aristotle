<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeProfile } from '@/types/resume'
import { ResumeSocialNetworkIcon } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Social'},
    icon: {type: String, required: false, default: 'la-network-wired-solid'},
    items: {type: Array as PropType<ResumeProfile[]>, required: true}
})

const networkIcon = (name: string) => {
    return ResumeSocialNetworkIcon[name.toUpperCase() as keyof typeof ResumeSocialNetworkIcon] || 'la-vuejs'
}
</script>

<template>
    <section class="section-social">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body">
            <div class="items">
                <a
                    class="icon-item"
                    v-for="item in items"
                    v-bind:key="`profile-${item.network.toLowerCase()}`"
                    :href="item.url"
                >
                    <ov-icon class="primary mr-2" :scale="1.25" :name="networkIcon(item.network)"/>
                    <span>{{ item.username }}</span>
                </a>
            </div>
        </div>
    </section>
</template>
