/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: 'javascript',
        themes: {
            dark: {
                colors: {
                    primary: '#1867C0',
                    secondary: '#5CBBF6',
                },
            },
            javascript: {
                dark: true,
                colors: {
                    primary: '#1867C0',
                    secondary: '#5CBBF6',
                    'doc-content-background': '#313031',
                    'doc-content-text': '#ffffff',
                    'doc-content-primary': '#f0db4f',
                    'doc-content-secondary': '#8a979e',
                    'doc-content-tertiary': '#272627',
                    'doc-sidebar-background': '#f0db4f',
                    'doc-sidebar-text': '#525052',
                    'doc-sidebar-primary': '#000000',
                    'doc-sidebar-secondary': '#92810c',
                    'doc-sidebar-tertiary': '#f0db4f',
                }
            },
            elite: {
                dark: true,
                colors: {
                    'doc-content-background': '#ffffff',
                    'doc-content-text': '#292b2c',
                    'doc-content-primary': '#d9534f',
                    'doc-content-secondary': '#8a979e',
                    'doc-content-tertiary': '#f5f5f5',
                    'doc-sidebar-background': '#242324',
                    'doc-sidebar-text': '#ffffff',
                    'doc-sidebar-primary': '#d9534f',
                    'doc-sidebar-secondary': '#8a979e',
                    'doc-sidebar-tertiary': '#141314',
                }
            },
            corporate: {
                dark: true,
                colors: {
                    'doc-content-background': '#ffffff',
                    'doc-content-text': '#292b2c',
                    'doc-content-primary': '#1565c0',
                    'doc-content-secondary': '#8a979e',
                    'doc-content-tertiary': '#f5f5f5',
                    'doc-sidebar-background': '#e0e0e0',
                    'doc-sidebar-text': '#424242',
                    'doc-sidebar-primary': '#1565c0',
                    'doc-sidebar-secondary': '#8a979e',
                    'doc-sidebar-tertiary': '#dad9d9',
                }
            }
        },
    },
})
