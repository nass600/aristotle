<script setup lang="ts">
defineProps({
    name: {type: String, required: false},
    background: {type: String, required: false},
    picture: {type: String, required: false},
    label: {type: String, required: false},
})
</script>

<template>
    <section class="section-basic" :style="`background-image: url('${background}');`">
        <div class="section-body">
            <div v-if="picture" class="avatar mx-auto mb-4">
                <img :src="picture" :alt="name">
            </div>
            <h1 class="name mt-0 mb-4 primary text-uppercase" v-html="name"></h1>
            <h1 class="label text-uppercase" v-html="label"></h1>
        </div>
    </section>
</template>

<style lang="scss">
.section-basic {
    text-align: center;
    background-color: var(--color-tertiary);
    background-size: cover;
    background-position: center;

    .avatar {
        border-radius: 50%;
        overflow: hidden;
        width: var(--avatar-size);
        height: var(--avatar-size);
        background-color: var(--color-background);

        img {
            max-width: 100%;
            height: auto;
        }
    }

    .label {
        font-size: 1.6em;
    }
}
</style>
