import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import login from '../views/Login/login.vue'
import first from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: first
    }, {
      path: '/home/comment',
      component: () => import('../views/Comment/comment.vue')
    }, {
      path: '/home/material',
      component: () => import('../views/Material/material.vue')
    }, {
      path: '/home/articles',
      component: () => import('../views/Articles/articles.vue')
    }]
  }, {
    path: '/login',
    component: login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
