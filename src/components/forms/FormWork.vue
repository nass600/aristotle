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
                        <v-col class="d-flex align-center" cols="2">
                            <v-img
                                :width="50"
                                :height="50"
                                :src="element.logo"
                                :lazy-src="placeholder"
                            />
                        </v-col>
                        <v-col cols="10">
                            <v-text-field v-model="element.logo" label="logo" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="element.position" label="position" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="element.name" label="name" hide-details/>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="element.startDate" label="startDate" type="date" hide-details/>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="element.endDate" label="endDate" type="date" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-row v-for="item, i in element.summary" v-bind:key="`summary-${i}`">
                                <v-col cols="10">
                                    <v-textarea v-model="element.summary[i]" label="summary" rows="3" hide-details/>
                                </v-col>
                                <v-col cols="2" class="d-flex flex-column justify-space-between">
                                    <v-btn
                                        icon="mdi-trash-can-outline"
                                        size="small"
                                        @click="() => element.summary.splice(i, 1)"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12"><v-divider/></v-col>
                                <v-col cols="12" class="d-flex align-center justify-center">
                                    <v-btn prepend-icon="mdi-plus" @click="() => element.summary.push('')">Add Summary</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="element.location" label="location" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="element.url" label="url" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-combobox
                                v-model="element.highlights"
                                label="highlights"
                                multiple
                                chips
                                hide-details
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="d-flex align-start justify-center px-0" cols="1">
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
import placeholder from '@/assets/image-placeholder.png'
import { ResumeWork } from '@/types/resume'

const props = defineProps({
    modelValue: {type: Array as PropType<ResumeWork[] | undefined>, required: true},
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
