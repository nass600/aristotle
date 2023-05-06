<script setup lang="ts">
defineProps({
    name: {type: String, required: true},
    background: String,
    picture: String,
    label: String,
})
</script>

<template>
    <section class="section-basic" :style="`background-image: url('${background}');`">
        <div class="section-body">
            <div v-if="picture" class="avatar">
                <img :src="picture" :alt="name">
            </div>
            <h1 class="name primary">{{ name }}</h1>
            <h3 class="label">{{ label }}</h3>
        </div>
    </section>
</template>

<style>
.section-basic {
    text-align: center;
    background-color: var(--color-tertiary);
    background-size: cover;
    background-position: center;
    /* background-size: 140%; */

    .avatar {
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto 1rem;
        width: var(--avatar-size);
        height: var(--avatar-size);
        background-color: var(--color-background);

        & img {
            max-width: 100%;
            height: auto;
        }
    }
    .name {
        margin: 0 auto var(--spacer);
    }

    .label {
        margin-bottom: 0;
    }
}
</style>
