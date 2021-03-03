import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sandbox01",
    name: "Sandbox01",
    component: () =>
      import(
        /* webpackChunkName: "sandbox01" */ "../views/sandbox01/Sandbox01.vue"
      ),
  },
  {
    path: "/sandbox02",
    name: "Sandbox02",
    component: () =>
      import(
        /* webpackChunkName: "sandbox02" */ "../views/sandbox02/Sandbox02.vue"
      ),
  },
  {
    path: "/sandbox03",
    name: "Sandbox03",
    component: () =>
      import(
        /* webpackChunkName: "sandbox03" */ "../views/sandbox03/Sandbox03.vue"
      ),
  },
  {
    path: "/sandbox04",
    name: "Sandbox04",
    component: () =>
      import(
        /* webpackChunkName: "sandbox04" */ "../views/sandbox04/Sandbox04.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
