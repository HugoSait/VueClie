import { createWebHistory, createRouter } from "vue-router";
import Estudiantes from '../views/Estudiantes.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/Login',
        name: 'TLogin',
        component: Login
    },
    {
        path: '/Estudiantes',
        name: 'TEstudiantes',
        component: Estudiantes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router