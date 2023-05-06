<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeLanguage, LanguagesMap } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    languages: {type: Array as PropType<ResumeLanguage[]>, required: true}
})

const langMap: LanguagesMap = {
    'spanish': 'es',
    'english': 'gb',
    'german': 'de',
    'french': 'fr',
}
</script>

<template>
    <section class="section-languages">
        <section-title title="Languages" icon="la-language-solid"/>
        <div class="section-body">
            <ul class="items">
                <li
                    class="item"
                    v-for="language in languages"
                    v-bind:key="`language-${language.name.toLowerCase()}`"
                >
                    <div class="language-icon">
                        <ov-icon :scale="1.5" :name="`fi-square-${langMap[language.name.toLowerCase()]}`"/>
                    </div>
                    <small>{{ language.name }}</small>
                    <small class="language-level">
                        <ul>
                            <li :class="{'language-level-item': i > 0}"
                                v-for="item, i in language.level?.split('|')"
                                v-bind:key="`language-${language.name}-level-${i}`"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </small>
                </li>
            </ul>
        </div>
    </section>
</template>

<style>
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
                height: 22px;
                width: 22px;
                margin-right: calc(var(--spacer) * 0.25);
            }

            .language-level {
                margin-left: auto;
                text-align: right;

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
