import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeveloperView from '../views/DeveloperView.vue'
import BackOfficesView from '../views/BackOfficesView/BackOfficesView.vue'
import DashboardsView from '../views/BackOfficesView/DashboardsView.vue'
import DeviceIndexsView from '../views/BackOfficesView/DevicesView/DeviceIndexsView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/developer',
        name: 'developer',
        component: DeveloperView,
    },
    {
        path: '/back-office',
        name: 'back-office',
        component: BackOfficesView,
        children: [{
                path: 'dashboard',
                name: 'dashboard',
                component: DashboardsView
            },
            {
                path: 'devices',
                name: 'devices',
                component: DeviceIndexsView
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router