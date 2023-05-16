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
                <li
                    class="item"
                    v-for="item in items"
                    v-bind:key="`language-${item.language.toLowerCase()}`"
                >
                    <div class="language-icon">
                        <ov-icon :scale="1.3" :name="`${ResumeLanguageIcon[item.language.toUpperCase() as keyof typeof ResumeLanguageIcon]}`"/>
                    </div>
                    <small>{{ ResumeLanguageName[item.language.toUpperCase() as keyof typeof ResumeLanguageName] }}</small>
                    <div v-if="item.fluency && !isNaN(parseInt(item.fluency))" class="language-level">
                        <template v-for="index in 5" v-bind:key="`language-level-${index}`">
                            <ov-icon
                                class="primary"
                                :scale="0.75"
                                :name="index <= parseInt(item.fluency) ? 'bi-circle-fill' : 'bi-circle'"
                            />
                        </template>
                    </div>
                    <div v-if="item.fluency && isNaN(parseInt(item.fluency))" class="language-level">
                        <small>{{ item.fluency }}</small>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
.section-languages {
    .items {
        .item {
            display: flex;
            align-items: center;

            & + .item {
                margin-top: calc(var(--spacer) * 0.25);
            }

            .language-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                height: 18px;
                width: 18px;
                margin-right: calc(var(--spacer) * 0.25);
            }

            .language-level {
                text-align: right;
                margin-left: auto;
                display: flex;
                align-items: center;

                .language-level-item {
                    opacity: 0.5;
                    font-style: italic;
                }
            }
        }
    }
}

@media print {
    .section-languages {
        .ov-icon {
            width: 20px;
            height: 20px;
        }
    }
}
</style>
