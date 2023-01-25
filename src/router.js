import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes : [
        {
            path: "/",
            name: "Body",
            component: () => import("./components/Body.vue")
        },
        {
            path: "/features",
            name: "Features",
            component: () => import("./components/Features.vue")
        },
        {
            path: "/safety",
            name: "Safety",
            component: () => import("./components/Safety.vue")
        },
        {
            path: "/aboutus",
            name: "AboutUs", 
            component: () => import("./components/AboutUs.vue")
        },
        {
            path: "/getstarted",
            name: "GetStarted",
            component: () => import("./components/GetStarted.vue")
        }
    ]
})
