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
      path: '/registration',
      name: 'registration',
      component: () => import('./views/Registration.vue')
    },
    {
      path: '/registration/company',
      name: 'registration-company',
      component: () => import('./views/Registration.vue')
    },
    {
      path: '/registration/user',
      name: 'registration-user',
      component: () => import('./views/Registration.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/Posts.vue')
    },
    {
      path: '/resumes/:id',
      name: 'resume',
      props: true,
      component: () => import('./views/Single-resume.vue')
    },
    {
      path: '/jobs/:id',
      name: 'job',
      props: true,
      component: () => import('./views/Single-job.vue')
    },
    {
      path: '/news/:id',
      name: 'post',
      props: true,
      component: () => import('./views/Single-post.vue')
    },
    {
      path: '/none',
      name: 'none',
      props: true,
      component: () => import('./views/None.vue')
    },
    {
      path: '/post-edit',
      name: 'post-edit',
      props: true,
      component: () => import('./views/Post-edit.vue')
    }
    ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    mode: 'history'
  })
