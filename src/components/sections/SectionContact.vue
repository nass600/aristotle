<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResumeLocation } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'

defineProps({
    email: {type: String, required: true},
    phone: {type: String, required: true},
    website: String,
    location: Object as PropType<ResumeLocation>
})
</script>

<template>
    <section class="section-contact">
        <section-title title="Contact" icon="la-user-circle"/>
        <div class="section-body">
            <ul class="items">
                <li class="item">
                    <ov-icon class="primary" :scale="1.25" name="la-mail-bulk-solid"/>
                    <small>{{ email }}</small>
                </li>
                <li class="item">
                    <ov-icon class="primary" :scale="1.25" name="la-mobile-solid"/>
                    <small>{{ phone }}</small>
                </li>
                <li class="item" v-if="website">
                    <ov-icon class="primary" :scale="1.25" name="la-link-solid"/>
                    <small>{{ website }}</small>
                </li>
                <li class="item" v-if="location">
                    <ov-icon class="primary" :scale="1.25" name="la-map-marker-solid"/>
                    <small>{{ `${location.city} ${location.countryCode}` }}</small>
                </li>
            </ul>
        </div>
    </section>
</template>

<style>
.section-contact {
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
    .section-contact {
        .ov-icon {
            width: 16px;
            height: 16px;
        }
    }
}
</style>
