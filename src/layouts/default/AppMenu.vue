<template>
    <div class="app-menu-container">
        <v-card class="app-menu elevation-8">
            <v-tabs
                v-model="activeTab"
                fixed-tabs
                bg-color="primary"
            >
                <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
                    {{ tab.name }}
                </v-tab>
            </v-tabs>

            <v-card-text>
                <router-view/>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeTab = ref(1)
const tabs = [
    { id: 1, name: "Resume", route: `resume` },
    { id: 2, name: "Config", route: `config` }
]
</script>

<style lang="scss">
    @import '@/styles/settings.scss';

    .app-menu-container {
        display: flex;
        flex-direction: column;
        flex: 0 0 $app-menu-width;
        width: $app-menu-width;
        height: 100vh;
    }
    .app-menu {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin: $spacer * 8;
    }

@media print {
    .app-menu-container {
        display: none;
    }
}
</style>
