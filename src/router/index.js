import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      },
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
      },
      {
        path: 'skills',
        component: () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue')
      },
      {
        path: 'portofolio',
        component: () => import(/* webpackChunkName: "Portofolio" */ '../views/Portofolio.vue')
      },
      {
        path: 'contact',
        component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
