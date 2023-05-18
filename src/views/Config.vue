<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <p class="text-body-1 d-flex align-center">
                    <v-icon icon="mdi-palette-outline" class="mr-2 text-primary"/>
                    <span>Theme</span>
                </p>
            </v-col>
            <v-col cols="12">
                <v-select v-model="activeTheme" variant="outlined" label="Theme" :items="themes" hide-details/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="text-body-1 d-flex align-center">
                    <v-icon icon="mdi-keyboard-return" class="mr-2 text-primary"/>
                    <span>End of Document Blanks</span>
                </p>
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="blanks" label="Blanks" variant="outlined" type="number" hide-details/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="text-body-1 d-flex align-center">
                    <v-icon icon="mdi-book-open-page-variant-outline" class="mr-2 text-primary"/>
                    <span>Sections</span>
                </p>
            </v-col>
            <v-col cols="12"><v-divider/></v-col>
            <v-col
                cols="6"
                v-for="panel, i in panels"
                v-bind:key="`section-${i}`"
            >
                <v-container class="h-100">
                    <v-row>
                        <v-col cols="12" class="subtitle rounded-lg mb-4">
                            <p class="text-body-1 d-flex align-center text-primary">
                                <v-icon :icon="panel.icon" class="mr-2 text-primary"/>
                                <span>{{ panel.title }}</span>
                            </p>
                        </v-col>
                    </v-row>
                    <v-row class="h-100">
                        <draggable
                            class="v-container px-0 h-100"
                            ghost-class="ghost-row"
                            :list="panel.model"
                            group="sections"
                            itemKey="id"
                        >
                            <template #item="{ element, index }">
                                <v-row>
                                    <v-col v-if="index !== 0" cols="12"><v-divider/></v-col>
                                    <v-col cols="12">
                                        <v-row>
                                            <v-col cols="12">
                                                <p class="text-body-1">{{ element.name }}</p>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="element.title" label="Title" variant="outlined" hide-details/>
                                            </v-col>
                                            <v-col cols="6" v-if="'displayBody' in element">
                                                <v-checkbox
                                                    v-model="element.displayBody"
                                                    label="Display body"
                                                    hide-details
                                                />
                                            </v-col>
                                            <v-col cols="6" v-if="'displayDuration' in element">
                                                <v-checkbox
                                                    v-model="element.displayDuration"
                                                    label="Display duration"
                                                    hide-details
                                                />
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </template>
                        </draggable>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useConfigStore } from '@/store/config'
import { Theme } from '@/types/config'
import draggable from 'vuedraggable'

const theme = useTheme()
const store = useConfigStore()

const panels = [
    {
        title: 'Sidebar',
        icon: 'mdi-page-layout-sidebar-left',
        model: store.sections.sidebar
    },
    {
        title: 'Main',
        icon: 'mdi-page-layout-sidebar-right',
        model: store.sections.main
    }
]

const activeTheme = computed({
    get () {
        return store.theme
    },
    set (value: Theme) {
        theme.global.name.value = value
        store.theme = value
    }
})
const themes = Object.values(Theme)

const blanks = computed({
    get() {
        return store.blanks
    },
    set(values) {
        store.blanks = parseInt(String(values))
    }
})
</script>

<style lang="scss">
    .subtitle {
        border: 1px solid rgb(var(--v-theme-primary));
    }
</style>
