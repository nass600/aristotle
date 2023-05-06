<template>
    <div class="app-actions">
        <v-btn icon="mdi-printer-outline" size="x-large" @click="print"></v-btn>
    </div>
</template>

<script lang="ts" setup>
import { getPageHeight } from '@/utils'

const print = () => {
    const element = document.getElementById('main-document')
    if (element) {
        const currentHeight = element.style.height
        element.style.height = element.style.minHeight = getPageHeight(element, true) + 'px'
        window.print()
        element.style.height = element.style.minHeight = currentHeight
    }
}
</script>

<style lang="scss">
    @import '@/styles/settings.scss';

    .app-actions {
        position: absolute;
        top: 0;
        right: $spacer * 4;
        display: flex;
        padding: $spacer * 8;
        height: 100vh;
    }

    @media print {
        .app-actions {
            display: none;
        }
    }
</style>
