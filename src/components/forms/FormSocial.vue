<template>
    <v-container class="px-0">
        <v-row>
            <v-col cols="12">
                <v-select
                    v-model="newItem"
                    :items="options"
                    label="network"
                    item-title='title'
                    item-value='key'
                    hide-details
                    @update:model-value="addItem"
                >
                    <template v-slot:prepend-inner>
                        <v-icon icon="mdi-wan" class="mr-2"/>
                    </template>
                    <template v-slot:item="{ props, item }">
                        <v-list-item v-bind="props" :title="item?.raw?.title">
                            <template v-slot:prepend>
                                <ov-icon class="mr-4" :scale="1.3" :name="item?.raw?.icon"/>
                            </template>
                        </v-list-item>
                    </template>
                </v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12"><v-divider/></v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
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
                            <v-col cols="5">
                                <v-text-field v-model="element.username" label="username" hide-details>
                                    <template v-slot:prepend-inner>
                                        <ov-icon :scale="1.5" :name="icon(element.network)" class="mr-2"/>
                                    </template>
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="element.url" label="url" hide-details/>
                            </v-col>
                            <v-col class="d-flex justify-end align-center px-0" cols="1">
                                <v-btn icon="mdi-trash-can-outline" class="ml-2" size="small" @click="removeItem(index)"/>
                            </v-col>
                        </v-row>
                    </template>
                </draggable>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, computed } from 'vue'
import { useResumeStore } from '@/store/resume'
import { ResumeSocialNetworkIcon, ResumeSocialNetworkName } from '@/types/resume'
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
const newItem = ref()
const resume = useResumeStore()

const options = resume.availableSocialNetworks.map((key: string) => (
    {
        icon: ResumeSocialNetworkIcon[key as keyof typeof ResumeSocialNetworkIcon],
        key,
        title: ResumeSocialNetworkName[key as keyof typeof ResumeSocialNetworkName]
    }
))
const icon = (name: string) => {
    return ResumeSocialNetworkIcon[name.toUpperCase() as keyof typeof ResumeSocialNetworkIcon] || 'la-vuejs'
}
const drag = ref(false)
const addItem = () => {
    props.addItem(newItem.value)
    newItem.value = null
}
</script>
