<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { ResumeLocation } from '@/types/resume'
import SectionTitle from '@/components/SectionTitle.vue'
import addressFormatter from '@fragaria/address-formatter'

const props = defineProps({
    title: {type: String, required: false, default: 'Contact'},
    icon: {type: String, required: false, default: 'la-user-circle'},
    email: {type: String, required: false},
    phone: {type: String, required: false},
    url: {type: String, required: false},
    location: {type: Object as PropType<ResumeLocation>, required: false}
})

const items = computed(() => {
    const result = []

    if (props.email) {result.push({icon: 'la-envelope-solid', value: props.email})}
    if (props.phone) {result.push({icon: 'la-mobile-solid', value: props.phone})}
    if (props.url) {result.push({icon: 'la-link-solid', value: props.url})}
    if (props.location && Object.keys(props.location).length > 0) {
        result.push({
            icon: 'la-map-marker-solid',
            value: addressFormatter.format({
                "road": props.location?.address,
                "city": props.location?.city,
                "postcode": props.location?.postalCode,
                "county": props.location?.region,
                "country": props.location?.countryCode,
            }, {output: 'array'}).join('<br>')
        })
    }

    return result
})
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
