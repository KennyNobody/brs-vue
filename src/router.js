import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            breadcrumb: [
            { name: 'Главная' }
            ]
        }
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: () => import(/* webpackChunkName: "about" */ './views/Jobs.vue'),
        meta: {
            breadcrumb: [
            { name: 'Вакансии' }
            ]
        }
    },
    {
        path: '/resumes',
        name: 'resumes',
        component: () => import(/* webpackChunkName: "about" */ './views/Resumes.vue'),
        meta: {
            breadcrumb: [
            { name: 'Резюме' }
            ]
        }
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('./views/Sign-in.vue'),
        meta: {
            breadcrumb: [
            { name: 'Вход' }
            ]
        }
    },
    {
        path: '/registration',
        name: 'registration',
        component: () => import('./views/Registration.vue'),
        meta: {
            breadcrumb: [
            { name: 'Регистрация' }
            ]
        }
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('./views/Posts.vue'),
        meta: {
            breadcrumb: [
            { name: 'Новости' }
            ]
        }
    },
    {
        path: '/resumes/:id',
        name: 'resume',
        props: true,
        component: () => import('./views/Single-resume.vue'),
        meta: {
            breadcrumb: [
            { name: 'Резюме', link: './' },
            { name: '...' }
            ]
        }
    },
    {
        path: '/jobs/:id',
        name: 'job',
        props: true,
        component: () => import('./views/Single-job.vue'),
        meta: {
            breadcrumb: [
            { name: 'Вакансии', link: './' },
            { name: '...' }
            ]
        }
    },
    {
        path: '/news/:id',
        name: 'post',
        props: true,
        component: () => import('./views/Single-post.vue'),
        meta: {
            breadcrumb: [
            { name: 'Новости', link: './' },
            { name: '...' }
            ]
        }
    },
    {
        path: '/none',
        name: 'none',
        props: true,
        component: () => import('./views/None.vue'),
        meta: {
            breadcrumb: [
            { name: '404' }
            ]
        }
    },
    {
        path: '/profile',
        name: 'profile',
        props: true,
        component: () => import('./views/Profile.vue'),
        meta: {
            breadcrumb: [
            { name: 'Профиль' }
            ]
        }
    },
    {
        path: '/post-edit',
        name: 'post-edit',
        props: true,
        component: () => import('./views/Post-edit.vue'),
        meta: {
            breadcrumb: [
            { name: 'Редактирование записи' }
            ]
        }
    },
    {
        path: '/vacancy-add',
        name: 'vacancy-add',
        component: () => import('./views/Vacancy-add.vue'),
        meta: {
            breadcrumb: [
            { name: 'Добавить вакансию' }
            ]
        }
    },
    {
        path: '/vacancy-edit',
        name: 'vacancy-edit',
        component: () => import('./views/Vacancy-edit.vue'),
        meta: {
            breadcrumb: [
            { name: 'Редактрировать вакансию' }
            ]
        }
    },
        {
        path: '/resume-add',
        name: 'resume-add',
        component: () => import('./views/Resume-add.vue'),
        meta: {
            breadcrumb: [
            { name: 'Добавить резюме' }
            ]
        }
    },
    // {
    //     path: '/resume-edit',
    //     name: 'resume-edit',
    //     component: () => import('./views/Resume-edit.vue'),
    //     meta: {
    //         breadcrumb: [
    //         { name: 'Редактрировать резюме' }
    //         ]
    //     }
    // },
    {
        path: '/edit-profile',
        name: 'edit-profile',
        props: true,
        component: () => import('./views/Edit-profile.vue'),
        meta: {
            breadcrumb: [
            { name: 'Редактирование профиля' }
            ]
        }
    }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    mode: 'history'
})
