<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import dayjs from 'dayjs'
import pluralize from 'pluralize'

const props = defineProps({
    logo: String,
    preTitle: {type: String, required: false},
    title: {type: String, required: true},
    subtitle: {type: String, required: false},
    startDate: {type: String, required: true},
    endDate: {type: String as PropType<string | null>, required: false},
    body: {type: [Array, String] as PropType<string[] | string>, required: false},
    quote: {type: String, required: false},
    score: {type: String, required: false},
    location: {type: String, required: false},
    link: {type: String, required: false},
    tags: {type: Array as PropType<string[]>, required: false},
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
        <div class="card-aside">
            <div class="card-image">
                <img v-if="logo" :src="logo" :alt="title"/>
            </div>
        </div>
        <div class="card-block">
            <div class="card-header">
                <h3 class="card-title">
                    <span v-if="preTitle" class="mr-2">{{ preTitle }}</span>
                    <span v-if="title" class="mr-2">{{ title }}</span>
                    <span v-if="subtitle" class="card-subtitle secondary">{{ subtitle }}</span>
                </h3>
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
                <div class="card-body" v-if="!Array.isArray(body)">
                    <span v-html="body"></span>
                </div>
                <div class="card-body" v-if="Array.isArray(body) && body.length > 0">
                    <ul>
                        <li v-for="item, i in body" v-bind:key="`body-${i}`" v-html="item"></li>
                    </ul>
                </div>
            </template>
            <div
                v-if="link || tags || quote || location"
                :class="['card-footer bg-tertiary rounded-lg', {'card-footer-quote': quote}]"
            >
                <div class="icon-item align-start" v-if="quote">
                    <ov-icon class="primary" name="la-quote-right-solid" :scale="1"/>
                    <span v-html="quote" class="text-justify"></span>
                </div>
                <div class="icon-item" v-if="location">
                    <ov-icon class="primary" :scale="1" name="la-map-marker-solid"/>
                    <span class="secondary">{{ location }}</span>
                </div>
                <div class="icon-item" v-if="score">
                    <ov-icon class="primary" :scale="1" name="la-award-solid"/>
                    <span class="secondary">{{ score }}</span>
                </div>
                <div class="icon-item" v-if="link">
                    <ov-icon class="primary" :scale="1" name="la-link-solid"/>
                    <span class="secondary">{{ link }}</span>
                </div>
                <div class="icon-item" v-if="tags">
                    <ov-icon class="primary" :scale="1" name="la-tags-solid"/>
                    <span class="secondary">{{ tags.join(', ') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    display: flex;
    padding: calc(var(--spacer) / 2);

    .card-aside {
        position: relative;
        margin: calc(var(--spacer) / 2);
        margin-right: 0;
    }

    .card-image {
        border-radius: 50%;
        width: var(--card-image-size);
        height: var(--card-image-size);
        background-color: var(--color-tertiary);
        overflow: hidden;
        position: relative;

        img {
            display: flex;
            max-width: 100%;
            height: auto;
        }
    }

    .card-header {
        padding: calc(var(--spacer) / 2);
        padding-bottom: 0;
        min-height: 3.8em;

        & + .card-footer {
            margin-top: calc(var(--spacer) / 2);
        }
    }

    .card-title {
        margin-bottom: 0;
        text-transform: uppercase;

        & + .card-caption {
            margin-top: calc(var(--spacer) / 2);
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
    }

    .card-body {
        text-align: justify;
        padding: calc(var(--spacer) / 2);
        margin-top: 0 !important;

        p {
            margin-bottom: calc(var(--spacer) / 3);
        }

        ul li {
            text-align: justify;
            position: relative;
            min-height: 1.4em;
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

    .card-footer {
        padding: calc(var(--spacer) / 2);

        &-quote {
            margin-top: calc(var(--spacer) / 2);
            margin-bottom: calc(var(--spacer) / 2);
        }

        .icon-item {
            margin: 0;

            & + .icon-item {
                margin-top: calc(var(--spacer) / 2);
            }
        }
    }
}

.sidebar .card {
    .card-aside {
        display: none;
    }
    .card-title {
        text-transform: none;
    }
    .card-header + .card-footer {
        margin-top: 0;
    }
    .card-footer {
        .ov-icon {
            display: none;
        }
    }
}

.card-group {
    .card {
        .card-aside::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: calc(var(--spacer) * -2);
            left: 50%;
            width: var(--card-timeline-thickness);
            margin-left: calc((var(--card-timeline-thickness) / 2) * -1);
            background-color: var(--color-secondary);
        }

        & + .card {
            .card-aside {
                &::before {
                    top: calc(var(--spacer) * -1);
                }

                &::after {
                    content: "";
                    position: absolute;
                    width: var(--card-timeline-dots-size);
                    height: var(--card-timeline-dots-size);
                    border: var(--card-timeline-thickness) solid var(--color-secondary);
                    border-radius: 50%;
                    background-color: var(--color-background);
                    top: calc((var(--card-image-size) / 2) - (var(--card-timeline-dots-size) / 2) - var(--card-timeline-thickness));
                    left: 50%;
                    margin-left: calc((var(--card-timeline-dots-size) / 2) * -1);
                }

                .card-image {
                    background-color: transparent;

                    img {
                        display: none;
                    }
                }
            }
        }
    }

    .card.card-last {
        .card-aside::before {
            bottom: 92%;
        }
    }
}
</style>
