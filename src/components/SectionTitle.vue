<script setup lang="ts">
defineProps({
    title: {type: String, required: true},
    icon: {type: String, required: true},
})
</script>

<template>
    <h2 class="section-title">
        <div class="title-icon primary">
            <ov-icon :scale="1.6" :name="icon"/>
        </div>
        <span class="title">{{title}}</span>
    </h2>
</template>

<style>
.section-title {
    display: flex;
    align-items: center;
    padding: var(--spacer) var(--spacer) 0 var(--spacer);
    margin: 0;

    .title {
        color: var(--color-primary);
    }

    .title-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: var(--color-tertiary);
        width: var(--icon-bg-size);
        height: var(--icon-bg-size);
        margin-right: calc(var(--spacer) * 0.5);
        padding: calc(var(--spacer) * 0.5);
    }
}

.sidebar .section-title {
    justify-content: center;
    font-size: var(--h3-font-size);

    .title {
        color: var(--color-text);
    }

    .title-icon {
        background-color: transparent;
        padding: 0;
        height: auto;
        width: 1rem;
        flex-basis: 1rem;
        margin-right: calc(var(--spacer) * 0.5);
        justify-content: center;
    }
}

@media print {
    .section-title {
        .ov-icon {
            width: 20px;
            height: 20px;
        }
    }
}
</style>
