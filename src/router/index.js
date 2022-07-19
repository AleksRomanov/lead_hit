import Vue from "vue";
import VueRouter from "vue-router";

import IdPage from '../components/IdPage/IdPage'
// import AnalyticsPage from '../components/IdAnalytics/id-analytics'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        redirect: "/auth"
    },
    {
        path: "/auth",
        name: "auth",
        component: IdPage,
        meta: {
            hidden: true,
            notUser: true,
        },
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
