<template>
    <v-container class="px-0">
        <v-row>
            <v-col cols="7">
                <v-text-field v-model="model.email" label="email" hide-details/>
            </v-col>
            <v-col cols="5">
                <v-text-field v-model="model.phone" label="phone" type="tel" hide-details/>
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="model.url" label="url" hide-details/>
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="model.location.address" label="location.address" hide-details/>
            </v-col>
            <v-col cols="5">
                <v-text-field v-model="model.location.postalCode" label="location.postalCode" hide-details/>
            </v-col>
            <v-col cols="7">
                <v-text-field v-model="model.location.city" label="location.city" hide-details/>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="model.location.region" label="location.region" hide-details/>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="model.location.countryCode" label="location.countryCode" hide-details/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ResumeBasics } from '@/types/resume'
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
    modelValue: {type: Object as PropType<ResumeBasics>, required: true},
})
const emit = defineEmits(['update:modelValue'])

const model = computed({
    get() {
        return props.modelValue
    },
    set(values) {
        emit('update:modelValue', values)
    }
})
</script>
