<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import dayjs from 'dayjs'
import pluralize from 'pluralize'

const props = defineProps({
    logo: String,
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String as PropType<string | null>, required: false},
    body: Array as PropType<string[] | string>,
    link: String,
    tags: Array as PropType<string[]>,
    displayDuration: {type: Boolean, required: false, default: true},
    displayCurrent: {type: Boolean, required: false, default: false},
    displayBody: {type: Boolean, required: false, default: true},
})

const duration = computed(() => {
    let text = ''
    let startDate = props.startDate ? dayjs(props.startDate) : dayjs()
    startDate.startOf('month')
    let endDate = props.endDate ? dayjs(props.endDate) : dayjs()
    endDate = endDate.add(1, 'month').startOf('month')
    const years = endDate.diff(startDate, 'year')
    startDate = startDate.add(years, 'years')
    const months = endDate.diff(startDate, 'month')

    if (years > 0) {
        text += `${years} ${pluralize('years', years)}`
    }
    if (months > 0) {
        if (years > 0) {
            text += ' '
        }
        text += `${months} ${pluralize('months', months)}`
    }

    return text
})
</script>

<template>
    <div class="card">
        <div class="card-aside" v-if="logo">
            <div class="card-image">
                <img :src="logo" :alt="title">
            </div>
        </div>
        <div class="card-block">
            <div class="card-header">
                <h3 class="card-title">{{ title }} <span class="card-subtitle secondary">{{ subtitle }}</span></h3>
                <small v-if="startDate" class="card-dates secondary">{{ dayjs(startDate).format('MMM YYYY') }}</small>
                <small v-if="startDate && endDate !== null" class="card-dates secondary">
                    - {{ endDate ? dayjs(endDate).format('MMM YYYY') : 'now' }}
                </small>
                <small v-if="startDate && displayDuration && endDate !== null" class="card-duration secondary">
                    ({{ duration }})
                </small>
                <small v-if="startDate && !endDate && displayCurrent" class="card-badge">current</small>
            </div>
            <template v-if="body && displayBody">
                <div class="card-body" v-if="!Array.isArray(body)" v-html="body"></div>
                <div class="card-body" v-if="Array.isArray(body)">
                    <ul>
                        <li v-for="item, i in body" v-bind:key="`body-${i}`" v-html="item"></li>
                    </ul>
                </div>
            </template>
            <div v-if="link || tags" class="card-footer">
                <div class="card-link" v-if="link">
                    <ov-icon class="primary" :scale="1" name="la-link-solid"/>
                    <span class="card-link-text secondary">{{ link }}</span>
                </div>
                <div class="card-tags" v-if="tags">
                    <ov-icon class="primary" :scale="1" name="la-tags-solid"/>
                    <span class="card-tags-text secondary">{{ tags.join(', ') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    display: flex;
    padding: var(--spacer);

    .card-aside {
        position: relative;
        width: var(--card-image-size);
        margin-right: calc(var(--spacer) / 2);
    }

    .card-image {
        border-radius: 50%;
        background-color: var(--color-tertiary);
        overflow: hidden;
        position: relative;

        img {
            display: flex;
            max-width: 100%;
            height: auto;
        }
    }


    .card-title {
        text-transform: uppercase;
        margin-bottom: 0;

        & + .card-caption {
            margin-top: calc(var(--spacer) / 4);
        }

        .card-subtitle {
            color: var(--color-secondary);
        }
    }

    .card-duration {
        margin-left: calc(var(--spacer) * 0.25);
    }

    .card-badge {
        display: inline-block;
        justify-content: center;
        align-items: center;
        background-color: var(--badge-bg);
        color: var(--badge-color);
        padding: 0 calc(var(--spacer) * 0.125);
        border-radius: 3px;
        line-height: 1.2;
        margin-left: calc(var(--spacer) * 0.5);
    }

    .card-block {
        display: flex;
        flex-direction: column;
        width: 100%;

        > div + div {
            padding-top: calc(var(--spacer) / 2);
        }
    }

    .card-body {
        text-align: justify;

        p {
            margin-bottom: calc(var(--spacer) / 3);
        }

        ul li {
            text-align: justify;
            position: relative;
        }

        .content & {
            ul li {
                padding-left: var(--spacer);

                &::before {
                    position: absolute;
                    top: 0;
                    left: calc(var(--spacer) / 2);
                    content: ">";
                    margin-left: calc(var(--spacer) / 2 * -1);
                    width: var(--spacer);
                    display: inline-block;
                    color: var(--color-primary);
                }
            }
        }
    }

    .card-link {
        display: flex;
        align-items: center;

        .ov-icon {
            margin-right: calc(var(--spacer) * 0.25);
        }

        & + .card-highlights,
        & + .card-tags {
            margin-top: calc(var(--spacer) * 0.5);
        }
    }

    .card-tags {
        display: flex;
        align-items: flex-start;

        .ov-icon {
            margin-top: 3px;
        }

        .card-tags-text {
            margin-left: calc(var(--spacer) * 0.25);
        }
    }
}

.sidebar .card {
    .card-aside {
        display: none;
    }
    .card-title {
        font-size: var(--h5-font-size);
        text-transform: none;
    }
    .card-footer {
        padding-top: calc(var(--spacer) * 0.25);
    }
    .card-body {
        font-size: var(--small-font-size);
    }
    .card-link {
        .ov-icon {
            display: none;
        }
        .card-link-text {
            font-size: var(--small-font-size);
        }
    }
}

@media print {
    .card {
        .ov-icon {
            width: 13px;
            height: 13px;
        }
    }
}
</style>
