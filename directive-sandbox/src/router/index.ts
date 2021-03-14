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
  {
    path: "/sandbox05",
    name: "Sandbox05",
    component: () =>
      import(
        /* webpackChunkName: "sandbox05" */ "../views/sandbox05/Sandbox05.vue"
      ),
  },
  {
    path: "/sandbox06",
    name: "Sandbox06",
    component: () =>
      import(
        /* webpackChunkName: "sandbox06" */ "../views/sandbox06/Sandbox06.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
