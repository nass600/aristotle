// Components
import App from './App.vue'
import { OhVueIcon } from "oh-vue-icons"

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)
app.component("ov-icon", OhVueIcon)
app.mount('#app')
