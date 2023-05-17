<script setup lang="ts">
import type { PropType } from 'vue'
import { ResumeLanguage, ResumeLanguageIcon, ResumeLanguageName } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    title: {type: String, required: false, default: 'Languages'},
    icon: {type: String, required: false, default: 'la-language-solid'},
    items: {type: Array as PropType<ResumeLanguage[]>, required: true}
})
</script>

<template>
    <section class="section-languages">
        <section-title :title="title" :icon="icon"/>
        <div v-if="items && items.length > 0" class="section-body">
            <ul class="items">
                <li class="icon-item" v-for="item in items" v-bind:key="`language-${item.language.toLowerCase()}`">
                    <ov-icon
                        class="mr-2"
                        :scale="1.25"
                        :name="`${ResumeLanguageIcon[item.language.toUpperCase() as keyof typeof ResumeLanguageIcon]}`"
                    />
                    <span>
                        {{ ResumeLanguageName[item.language.toUpperCase() as keyof typeof ResumeLanguageName] }}
                    </span>
                    <div class="text-right">
                        <span v-if="item.fluency && !isNaN(parseInt(item.fluency))">
                            <ov-icon
                                v-for="index in 5" v-bind:key="`language-level-${index}`"
                                class="primary"
                                :scale="0.75"
                                :name="index <= parseInt(item.fluency) ? 'bi-circle-fill' : 'bi-circle'"
                            />
                        </span>
                        <span v-if="item.fluency && isNaN(parseInt(item.fluency))">{{ item.fluency }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
