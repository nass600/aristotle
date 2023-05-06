// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/resume',
        component: () => import('@/layouts/default/Default.vue'),
        children: [
            {
                path: 'resume',
                name: 'Resume',
                component: () => import(/* webpackChunkName: "resume" */ '@/views/Resume.vue'),
            },
            {
                path: 'config',
                name: 'Config',
                component: () => import(/* webpackChunkName: "config" */ '@/views/Config.vue'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
