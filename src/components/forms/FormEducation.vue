<template>
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
                            <v-img :width="50" :height="50" :src="element.logo"/>
                        </v-col>
                        <v-col cols="10">
                            <v-text-field v-model="element.logo" label="logo" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="element.studyType" label="studyType" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="element.institution" label="institution" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="element.url" label="url" hide-details/>
                        </v-col>
                        <v-col cols="8">
                            <v-text-field v-model="element.area" label="area" hide-details/>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field v-model="element.score" label="score" hide-details/>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="element.startDate" label="startDate" type="date" hide-details/>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="element.endDate" label="endDate" type="date" hide-details/>
                        </v-col>
                        <v-col cols="12">
                            <v-row v-for="course, i in element.courses" v-bind:key="`course-${i}`">
                                <v-col cols="11">
                                    <v-textarea v-model="element.courses[i]" label="courses" rows="3" hide-details/>
                                </v-col>
                                <v-col cols="1" class="d-flex justify-center px-0">
                                    <v-btn
                                        icon="mdi-trash-can-outline"
                                        size="small"
                                        @click="() => element.courses.splice(i, 1)"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12"><v-divider/></v-col>
                                <v-col cols="12" class="d-flex align-center justify-center">
                                    <v-btn prepend-icon="mdi-plus" @click="() => element.courses.push('')">Add Course</v-btn>
                                </v-col>
                            </v-row>
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
            <v-btn prepend-icon="mdi-plus" @click="addItem">Add item</v-btn>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'

const props = defineProps({
    modelValue: {type: Array as PropType<unknown[] | undefined>, required: true},
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
