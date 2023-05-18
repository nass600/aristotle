<template>
    <v-container class="px-0">
        <v-row>
            <v-col cols="12">
                <v-textarea v-model="model" label="summary" rows="14" hide-details/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
    modelValue: {type: [String, undefined] as PropType<string | undefined>, required: false},
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
