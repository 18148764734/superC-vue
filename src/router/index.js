import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';
import layOut from "../layout/index.vue";
const routes = [{
    path: '/',
    redirect: '/dashboard',
    name: 'index',
    component:layOut,
    children:[
        {
            path: 'dashboard',
            name: 'dashboard',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/index.vue"),
            meta: {
                title: '时空坐标 Shandobako'
            }
        },
        {
            path: 'login',
            name: 'login',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/login.vue"),
            meta: {
                title: '登录 Login'
            }
        },
        {
            path: 'main',
            name: 'main',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/main.vue"),
            meta: {
                title: '主页 Shandobako '
            }
        },
        {
            path: 'origin',
            name: 'origin',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/origin.vue"),
            meta: {
                title: 'origin Shandobako '
            }
        },
        
    ]
}]

let router = createRouter({
    history: createWebHashHistory(), //process.env.BASE_URL
    routes
})

router.beforeEach((to, from, next) => {
    // debugger
    next()
})

export default router