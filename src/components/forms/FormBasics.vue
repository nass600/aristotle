<template>
    <v-container class="px-0">
        <v-row>
            <v-col class="d-flex align-center" cols="2">
                <v-img
                    :width="50"
                    :height="50"
                    :src="model.picture"
                    :lazy-src="placeholder"
                />
            </v-col>
            <v-col cols="10">
                <v-text-field v-model="model.picture" label="picture" hide-details/>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="model.name" label="name" hide-details/>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="model.label" label="label" hide-details/>
            </v-col>
            <v-col class="d-flex align-center" cols="2">
                <v-img
                    :width="50"
                    :height="50"
                    :src="model.background"
                    :lazy-src="placeholder"
                />
            </v-col>
            <v-col cols="10">
                <v-text-field v-model="model.background" label="background" hide-details/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ResumeBasics } from '@/types/resume'
import type { PropType } from 'vue'
import { computed } from 'vue'
import placeholder from '@/assets/image-placeholder.png'

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
