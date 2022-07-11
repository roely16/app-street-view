import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Orbit from "../views/Orbit";
import Solicitudes from "../views/Solicitudes.vue";
import ForgotPassword from "../views/ForgotPassword";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/orbit",
        name: "orbit",
        component: Orbit,
    },
    {
        path: "/solicitudes",
        name: "solicitudes",
        component: Solicitudes,
    },
    {
        path: "/forgot_password",
        name: "forgot_password",
        component: ForgotPassword,
    },
];

const router = new VueRouter({
    routes,
});

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from, next) => {

    const user = JSON.parse(sessionStorage.getItem("app-street-view"));

    if ((to.name != "login" && to.name != "register") && to.name != 'solicitudes') {
        if (!user) {
            // Enviar al login
            return next("/");
        }
    }

    if (to.name == "login") {
        if (user) {
            return next("/orbit");
        }
    }

    next();
});
export default router;
