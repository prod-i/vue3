import About from '@/pages/About'
import NpcPage from '@/pages/NpcPage'
import NpcPageWithStore from '@/pages/NpcPageWithStore'
import NpcPageCompositionApi from '@/pages/NpcPageCompositionApi'
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
    {
        path: '/store',
        component: NpcPageWithStore
    },
    {
        path: '/composition',
        component: NpcPageCompositionApi
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;