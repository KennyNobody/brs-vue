import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/jobs',
      name: 'jobs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Jobs.vue')
    },
     {
      path: '/resumes',
      name: 'resumes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Resumes.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('./views/Sign-in.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/Posts.vue')
    },
    {
      path: '/resumes/resume',
      name: 'resume',
      component: () => import('./views/Single-resume.vue')
    }
  ]
})
