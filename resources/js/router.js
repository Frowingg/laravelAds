import Vue from 'vue';
import VueRouter from 'vue-router';
import CookiePage from './pages/CookiePage.vue';
import SessionPage from './pages/SessionPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
    {
            path: '/',
            name: 'cookie',
            component: CookiePage
        },
        {
           path: '/session',
            name: 'session',
            component: SessionPage
        },
    ]
});

export default router;