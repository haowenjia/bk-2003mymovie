import Vue from 'vue'
import VueRouter from 'vue-router'

import FilmRouter from './routes/film';
import CinemaRouter from './routes/Cinema';
import CenterRouter from './routes/Center';
Vue.use(VueRouter)

const routes = [
    CenterRouter,
    CinemaRouter,
    FilmRouter,
    {
        path: '/',
        redirect: '/Films',
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes,
})

export default router;