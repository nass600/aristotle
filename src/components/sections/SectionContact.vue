<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { ResumeLocation } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'
import addressFormatter from '@fragaria/address-formatter'

const props = defineProps({
    title: {type: String, required: false, default: 'Contact'},
    icon: {type: String, required: false, default: 'la-user-circle'},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    url: String,
    location: Object as PropType<ResumeLocation>
})
const address = computed(() => (
    addressFormatter.format({
        "road": props.location?.address,
        "city": props.location?.city,
        "postcode": props.location?.postalCode,
        "county": props.location?.region,
        "country": props.location?.countryCode,
    },
    {
        output: 'array'
    })
))
</script>

<template>
    <section class="section-contact">
        <section-title :title="title" :icon="icon"/>
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
                <li class="item" v-if="url">
                    <ov-icon class="primary" :scale="1.25" name="la-link-solid"/>
                    <small>{{ url }}</small>
                </li>
                <li class="item" v-if="location">
                    <ov-icon class="primary" :scale="1.25" name="la-map-marker-solid"/>
                    <small v-html="address.join('<br>')"></small>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
.section-contact {
    .items {
        .item {
            display: flex;
            align-items: center;

            small {
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
