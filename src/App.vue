<template>
    <router-view />
</template>

<script lang="ts" setup>
import resume from './resume.json'
import { useResumeStore } from '@/store/resume'

const store = useResumeStore()
store.loadResume(resume)
</script>
