<template>
    <div class="app-actions">
        <v-tooltip text="Print Resume">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-printer-outline" size="x-large" @click="print"/>
            </template>
        </v-tooltip>
        <v-tooltip text="Upload Resume">
            <template v-slot:activator="{ props }">
                <v-btn class="mt-4" v-bind="props" icon="mdi-upload" size="x-large" @click="uploader.click()"/>
                <v-file-input
                    ref="uploader"
                    class="d-none"
                    v-model="file"
                    accept="application/json"
                    @change="upload"
                />
            </template>
        </v-tooltip>
        <v-tooltip text="Reset Resume">
            <template v-slot:activator="{ props }">
                <v-btn class="mt-4" v-bind="props" icon="mdi-trash-can-outline" size="x-large" @click="reset"/>
            </template>
        </v-tooltip>
        <v-tooltip text="Download Resume">
            <template v-slot:activator="{ props }">
                <v-btn class="mt-4" v-bind="props" icon="mdi-download" size="x-large" :href="downloadFile" download="resume.json"/>
            </template>
        </v-tooltip>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useResumeStore } from '@/store/resume'

const file = ref<File[] | undefined>()
const uploader = ref()
const resume = useResumeStore()

const print = () => {
    const element = document.getElementById('main-document')
    if (element) {
        window.print()
    }
}
const upload = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target && target.files) {
        file.value?.push(target.files[0])
    }

    if (!file.value) {
        return
    }

    let reader = new FileReader()
    reader.readAsText(file.value[0])
    reader.onload = function() {
        resume.load(JSON.parse(String(reader.result)))
    }

    reader.onerror = function() {
        console.log(reader.error)
    }
}
const downloadFile = computed(() => {
    return `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(resume.$state, null, 4))}`
})
const reset = () => {
    resume.$reset()
}
</script>

<style lang="scss">
    @use '@/styles/settings.scss';

    .app-actions {
        position: absolute;
        top: 0;
        right: settings.$spacer * 4;
        display: flex;
        flex-direction: column;
        padding: settings.$spacer * 8;
    }

    @media print {
        .app-actions {
            display: none;
        }
    }
</style>
