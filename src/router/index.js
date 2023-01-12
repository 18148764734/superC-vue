import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';
import layOut from "../layout/index.vue";
const routes = [{
    path: '/',
    redirect: '/main',
    name: 'index',
    component:layOut,
    children:[
        {
            path: 'main',
            name: 'main',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/main.vue"),
            meta: {
                title: '时空坐标 Shandobako'
            }
        },
        {
            path: 'register',
            name: 'register',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/register.vue"),
            meta: {
                title: '时空坐标 Shandobako'
            }
        },
        {
            path: 'restpwd',
            name: 'restpwd',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/restpwd.vue"),
            meta: {
                title: '重置密码'
            }
        },
        {
            path: 'restphone',
            name: 'restphone',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/restphone.vue"),
            meta: {
                title: '重置手机号'
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
},
{
    path: '/calendar',
    name: 'calendar',
    component: () => import( /* webpackChunkName: "quotation" */ "../views/calendar.vue"),
    meta: {
        title: 'calendar'
    }
},
]

let router = createRouter({
    history: createWebHashHistory(), //process.env.BASE_URL
    routes
})

router.beforeEach((to, from, next) => {
    // debugger
    next()
})

export default router