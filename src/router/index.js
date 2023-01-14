import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeveloperView from '../views/DeveloperView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
}, {
    path: '/developer',
    name: 'developer',
    component: DeveloperView
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router