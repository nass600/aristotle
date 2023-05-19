<template>
    <v-row v-if="model && model.length > 2">
        <v-col cols="12" class="d-flex align-center justify-center">
            <v-btn color="primary" prepend-icon="mdi-plus" @click="addItem(true)">Add item</v-btn>
        </v-col>
        <v-col cols="12"><v-divider/></v-col>
    </v-row>
    <draggable
        v-model="model"
        class="v-container px-0"
        ghost-class="ghost-row"
        @start="drag=true"
        @end="drag=false"
        item-key="id">
        <template #item="{element, index}">
            <v-row>
                <v-col v-if="index !== 0" cols="12"><v-divider/></v-col>
                <v-col cols="11">
                    <v-row>
                        <v-col cols="8">
                            <v-text-field v-model="element.name" label="name" hide-details/>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="element.level" label="level" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-combobox
                                v-model="element.keywords"
                                label="keywords"
                                multiple
                                chips
                                hide-details
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="d-flex flex-column align-center justify-start px-0" cols="1">
                    <v-btn icon="mdi-trash-can-outline" size="small" @click="removeItem(index)"/>
                </v-col>
            </v-row>
        </template>
    </draggable>
    <v-row>
        <v-col cols="12"><v-divider/></v-col>
        <v-col cols="12" class="d-flex align-center justify-center">
            <v-btn color="primary" prepend-icon="mdi-plus" @click="addItem(false)">Add item</v-btn>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import { ResumeSkill } from '@/types/resume'

const props = defineProps({
    modelValue: {type: Array as PropType<ResumeSkill[] | undefined>, required: true},
    addItem: {type: Function, required: true},
    removeItem: {type: Function, required: true}
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
const drag = ref(false)
</script>
