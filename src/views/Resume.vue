<template>
    <v-container fluid>
        <v-row>
            <v-expansion-panels>
                <v-expansion-panel v-for="section in config.formSections" v-bind:key="section.name">
                    <v-expansion-panel-title>
                        <p class="text-body-1 d-flex align-center">
                            <ov-icon :name="section.icon" :scale="1.25" class="mr-4 text-primary"/>
                            <span>{{ section.title }}</span>
                        </p>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text eager>
                        <component
                            :is="`form-${section.component}`"
                            v-model="section.model"
                            :add-item="section.addItem"
                            :remove-item="section.removeItem"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@/store/config'

const config = useConfigStore()
</script>
