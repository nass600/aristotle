<template>
    <v-container class="main-container d-flex flex-column align-center">
        <main-document/>
    </v-container>
</template>

<script lang="ts" setup>
import MainDocument from '@/components/MainDocument.vue'
</script>

<styles lang="scss">
    @use '@/styles/settings.scss';

    .main-container {
        padding: settings.$spacer * 8 !important;
        overflow-y: auto;
    }

@media print {
    .main-container {
        display: block !important;
        padding: 0 !important;
        margin: 0 !important;
        max-width: auto !important;
        overflow-x: hidden;
        overflow-y: hidden;
    }
}
</styles>
