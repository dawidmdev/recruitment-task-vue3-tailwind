import {createRouter, createWebHistory} from 'vue-router'

import UsersListView from '@/views/UsersListView.vue'
import CreateUser from '@/views/CreateUser.vue'
import UpdateUser from '@/views/UpdateUser.vue'

const routes = [
    {path: '/users', component: UsersListView},
    {path: '/users/create', component: CreateUser},
    {path: '/users/:userId', component: UpdateUser}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router
