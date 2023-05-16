<template>
    <div class="app-menu-container">
        <v-card class="app-menu d-flex elevation-8">
            <div class="app-title d-flex align-center justify-center pa-4">
                <v-img class="mr-2" width="50" height="50" :src="logo"/>
                <h1>Aristotle</h1>
            </div>
            <v-tabs
                v-model="activeTab"
                fixed-tabs
                stacked
                bg-color="primary"
            >
                <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
                    <v-icon class="mb-2" :icon="tab.icon"/>
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
import logo from '@/assets/logo.png'
const activeTab = ref(1)
const tabs = [
    { id: 1, name: "Resume", route: `resume`, icon: 'mdi-file-document-edit-outline' },
    { id: 2, name: "Config", route: `config`, icon: 'mdi-cog-outline' }
]
</script>

<style lang="scss">
    @use '@/styles/settings.scss';

    .app-menu-container {
        display: flex;
        flex-direction: column;
        flex: 0 0 settings.$app-menu-width;
        width: settings.$app-menu-width;
        height: 100vh;
    }

    .app-menu {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin: settings.$spacer * 8;

        .v-tabs {
            flex: 0 0 auto;
        }
    }

    .app-title {
        display: flex;
        font-family: var(--font);

        .v-img {
            flex: 0 0 50px;
        }
    }

@media print {
    .app-menu-container {
        display: none;
    }

    .app-title {
        display: none;
    }
}
</style>
