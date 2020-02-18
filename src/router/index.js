import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/facility',
    name: 'Facility',
    component: () => import(/* webpackChunkName: "facility" */ '../views/Facility.vue')
  },
  {
    path: '/budget',
    name: 'Budget',
    component: () => import(/* webpackChunkName: "budget" */ '../views/Budget.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "forum" */ '../views/Forum.vue')
  },
  {
    path: '/meetings',
    name: 'Meetings',
    component: () => import(/* webpackChunkName: "meetings" */ '../views/Meetings.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
