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

const items = computed(() => [
    {
        icon: 'la-mail-bulk-solid',
        value: props.email
    },
    {
        icon: 'la-mobile-solid',
        value: props.phone
    },
    {
        icon: 'la-link-solid',
        value: props.url
    },
    {
        icon: 'la-map-marker-solid',
        value: addressFormatter.format({
            "road": props.location?.address,
            "city": props.location?.city,
            "postcode": props.location?.postalCode,
            "county": props.location?.region,
            "country": props.location?.countryCode,
        },
        {
            output: 'array'
        }).join('<br>')
    },
])
</script>

<template>
    <section class="section-contact">
        <section-title :title="title" :icon="icon"/>
        <div class="section-body">
            <ul class="items">
                <li v-for="item, i in items" v-bind:key="`contact-${i}`" class="icon-item">
                    <ov-icon class="primary mr-2" :scale="1.25" :name="item.icon"/>
                    <span v-html="item.value"></span>
                </li>
            </ul>
        </div>
    </section>
</template>
