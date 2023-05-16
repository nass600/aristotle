<script setup lang="ts">
defineProps({
    title: {type: String, required: true},
    icon: {type: String, required: true},
})
</script>

<template>
    <div class="section-title">
        <div class="title-icon primary">
            <ov-icon :scale="1.6" :name="icon"/>
        </div>
        <h2 class="title">{{title}}</h2>
    </div>
</template>

<style lang="scss">
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

    .title {
        color: var(--color-text);
        font-size: var(--h3-font-size);
    }

    .title-icon {
        background-color: transparent;
        padding: 0;
        height: auto;
        width: var(--spacer);
        flex-basis: var(--spacer);
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
