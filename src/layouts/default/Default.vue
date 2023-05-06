<template>
    <v-app>
        <v-main class="d-flex">
            <app-menu/>
            <default-view />
            <app-actions/>
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>
import DefaultView from './View.vue'
import AppMenu from './AppMenu.vue'
import AppActions from './AppActions.vue'
</script>

<styles lang="scss">
    .v-main {
        height: 100vh;
        overflow-y: hidden;
    }

    @media print {
        .v-main {
            height: auto;
        }
    }
</styles>
