<script setup lang="ts">
import { useConfigStore } from '@/store/config'

const config = useConfigStore()
</script>

<template>
    <div
        id="main-document"
        class="main-document"
    >
        <div class="sidebar">
            <component
                v-for="section in config.renderSections.sidebar"
                v-bind:key="`render-section-${section.name.toLowerCase()}`"
                :is="`section-${section.component}`"
                :title="section.title"
                :icon="section.icon"
                v-bind="section.props"
            />
        </div>
        <div class="content">
            <component
                v-for="section in config.renderSections.main"
                v-bind:key="`render-section-${section.name.toLowerCase()}`"
                :is="`section-${section.component}`"
                :title="section.title"
                :icon="section.icon"
                v-bind="section.props"
            />
            <div v-for="index in config.blanks" :key="index" class="br-print">&nbsp;</div>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/styles/settings.scss';

:root {
    --c-print-multiplier: 1.5;
    --c-font-size-base: 12px;
    --c-font-size-base-sidebar: 9.5px;
    --c-page-width: 794px;
    --c-page-height: 1121px;
    --spacer: 1.5em;
}

/* color palette */
:root {
    --background: #181818;
    --color: white;
}

/* fonts */
:root {
    --font: 'Maven Pro', sans-serif;
    --h1-font-size: 2.0em;
    --h2-font-size: 1.4em;
    --h3-font-size: 1.2em;
    --h4-font-size: 1.1em;
    --h5-font-size: 1em;
    --small-font-size: 0.9em;
}

/* app */
:root {
    --avatar-size: 180px;
    --sidebar-width: calc(var(--page-width) * 0.275);
    --icon-bg-size: 2.5em;
    --card-image-size: 3em;
    --card-timeline-thickness: 0.1em;
    --card-timeline-dots-size: calc(0.8em + var(--card-timeline-thickness));
    --badge-bg: #388e3c;
    --badge-color: white;
}

@media screen {
    :root {
        --screen-multiplier: 1.5;
        --font-size-base: calc(var(--c-font-size-base) * var(--screen-multiplier));
        --page-width: calc(var(--c-page-width) * var(--screen-multiplier));
        --page-height: calc(var(--c-page-height) * var(--screen-multiplier));
    }
}

@media #{map-get(settings.$display-breakpoints, 'lg-and-down')} {
    :root {
        --screen-multiplier: 1;
        --font-size-base: calc(var(--c-font-size-base) * var(--screen-multiplier));
        --page-width: calc(var(--c-page-width) * var(--screen-multiplier));
        --page-height: calc(var(--c-page-height) * var(--screen-multiplier));
    }
}

@media print {
    :root {
        --screen-multiplier: var(--c-print-multiplier);
        --font-size-base: calc(var(--c-font-size-base) * var(--screen-multiplier));
        --page-width: calc(var(--c-page-width) * var(--screen-multiplier));
        --page-height: calc(var(--c-page-height) * var(--screen-multiplier));
    }
}

.main-document {
    width: var(--page-width);
    line-height: 1.4;
    display: flex;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    font-size: var(--font-size-base);
    font-family: var(--font);
    font-weight: normal;

    .icon-item {
        display: flex;
        align-items: center;
        margin: calc(var(--spacer) * 0.5);

        .ov-icon,
        .v-icon {
            margin-right: calc(var(--spacer) * 0.25);
        }

        span, small {
            word-wrap: break-word;
            flex: 1;
            min-width: 0;
        }

        & > .icon-item {
            margin: 0;
        }
    }

    .br-print {
        display: none;
        height: 1pt;
    }

    .sidebar {
        --color-background: rgb(var(--v-theme-doc-sidebar-background));
        --color-text: rgb(var(--v-theme-doc-sidebar-text));
        --color-primary: rgb(var(--v-theme-doc-sidebar-primary));
        --color-secondary: rgb(var(--v-theme-doc-sidebar-secondary));
        --color-tertiary: rgb(var(--v-theme-doc-sidebar-tertiary));
        background-color: var(--color-background);
        color: var(--color-text);
        flex: 0 0 var(--sidebar-width);
        width: var(--sidebar-width);
        font-size: calc(var(--c-font-size-base-sidebar) * var(--screen-multiplier));

        // & a {
        //     color: var(--color-text);
        // }

        & p {
            font-size: calc(var(--c-font-size-base) * 1.3);
        }
    }

    .content {
        --color-background: rgb(var(--v-theme-doc-content-background));
        --color-text: rgb(var(--v-theme-doc-content-text));
        --color-primary: rgb(var(--v-theme-doc-content-primary));
        --color-secondary: rgb(var(--v-theme-doc-content-secondary));
        --color-tertiary: rgb(var(--v-theme-doc-content-tertiary));
        flex: 1;
        background-color: var(--color-background);
        color: var(--color-text);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        padding: 0;
        margin: 0;
        & li {
            list-style: none;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin-top: 0;
        font-weight: normal;
    }

    h1 {
        font-size: var(--h1-font-size);
    }

    h2 {
        font-size: var(--h2-font-size);
    }

    h3 {
        font-size: var(--h3-font-size);
    }

    h4 {
        font-size: var(--h4-font-size);
    }

    h5 {
        font-size: var(--h5-font-size);
    }

    small {
        font-size: var(--small-font-size);
    }

    [class^="section-"] {
        .section-body {
            padding: calc(var(--spacer) * 0.5);
            margin: 0;
        }
        .section-body-cards {
            padding: 0;
        }
    }

    .primary {
        color: var(--color-primary);
    }
    .secondary {
        color: var(--color-secondary);
    }
    .tertiary {
        color: var(--color-tertiary);
    }
    .bg-tertiary {
        background-color: var(--color-tertiary);
    }
}

@page {
    // size: A4;
    margin: 0;
}
@page :left {
    margin-left: 0;
}

@page :right {
    margin-left: 0;
}

@media print {
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: var(--font);
        font-size: var(--font-size-base);
    }

    .main-document {
        box-shadow: none;
        overflow: hidden;

        .br-print {
            display: block;
        }
    }

    .section-summary,
    .section-languages,
    .card,
    .sidebar [class^="section-"],
    section .title,
    p {
        page-break-inside: avoid;
    }
}
</style>
