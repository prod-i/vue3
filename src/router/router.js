import About from '@/pages/About'
import NpcPage from '@/pages/NpcPage'
import NpcItem from '@/pages/NpcItem'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: NpcPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/npc/:id',
        component: NpcItem
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;