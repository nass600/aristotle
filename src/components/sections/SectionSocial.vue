<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeProfile, SocialIcons } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    profiles: {type: Array as PropType<ResumeProfile[]>, required: true}
})
const icons: SocialIcons = {
    'Skype': 'la-skype',
    'Linkedin': 'la-linkedin',
    'Twitter': 'la-twitter',
    'Github': 'la-github',
    'Stackoverflow': 'la-stack-overflow',
    'Slideshare': 'la-slideshare',
    'Stackshare': 'ri-stackshare-line',
    'Ansible': 'co-ansible',
    'Angellist': 'la-angellist',
}
</script>

<template>
    <section class="section-social">
        <section-title title="Social" icon="la-network-wired-solid"/>
        <div class="section-body">
            <div class="items">
                <a
                    class="item"
                    v-for="profile in profiles"
                    v-bind:key="`profile-${profile.network.toLowerCase()}`"
                    :href="profile.url"
                >
                    <ov-icon
                        class="primary"
                        :scale="1.25"
                        :name="profile.network in icons ? icons[profile.network] : 'la-vuejs'"
                    />
                    <small>{{ profile.url.replace('https://', '') }}</small>
                </a>
            </div>
        </div>
    </section>
</template>

<style>
.section-social {
    .items {
        .item {
            display: flex;
            align-items: center;
            & small {
                word-wrap: break-word;
                flex: 1;
                min-width: 0;
            }

            .ov-icon {
                margin-right: calc(var(--spacer) * 0.5);
            }

            & + .item {
                margin-top: calc(var(--spacer) * 0.25);
            }
        }

    }
}

@media print {
    .section-social {
        .ov-icon {
            width: 16px;
            height: 16px;
        }
    }
}
</style>
