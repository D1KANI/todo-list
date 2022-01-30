import Vue from 'vue'
import VueRouter from 'vue-router'
import VActive from '../views/VActive'
import VInactive from '../views/VInactive'
import VAddTask from '../views/VAddTask'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Active',
    component: VActive
  },
  {
    path: '/inactive',
    name: 'Inactive',
    component: VInactive
  },
  {
    path: '/add',
    name: 'AddTask',
    component: VAddTask
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
