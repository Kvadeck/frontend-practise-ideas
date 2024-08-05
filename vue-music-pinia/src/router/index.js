import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Manage from "@/views/Manage.vue";
import {useUserStore} from "@/stores/user";

const routes = [
    {
        name: "home",
        path: "/",
        component: Home
    },
    {
        name: "manage",
        // alias: '/manage',
        path: "/manage-music",
        component: Manage,
        beforeEnter: (to, from, next) => {
            console.log('Manage routes Guard!')
            next()
        },
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/manage',
        redirect: {name: 'manage'}
    },
    {
        path: '/:catchAll(.*)*',
        redirect: {name: 'home'}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'text-yellow-500'
});

router.beforeEach((to, from, next) => {

    if (!to.meta.requiresAuth) {
        next()
        return;
    }

    const store = useUserStore();

    if (store.userLoggedIn) {
        next();
    } else {
        next({name: 'home'});
    }

})

export default router;
