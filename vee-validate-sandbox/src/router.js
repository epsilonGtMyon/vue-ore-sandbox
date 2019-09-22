import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sandbox01',
      name: 'sandbox01',
      component: () =>
        import(
          /* webpackChunkName: "sandbox01" */ './pages/sandbox01/Sandbox01.vue'
        )
    },
    {
      path: '/sandbox02',
      name: 'sandbox02',
      component: () =>
        import(
          /* webpackChunkName: "sandbox02" */ './pages/sandbox02/Sandbox02.vue'
        )
    },
    {
      path: '/sandbox03',
      name: 'sandbox03',
      component: () =>
        import(
          /* webpackChunkName: "sandbox03" */ './pages/sandbox03/Sandbox03.vue'
        )
    }
  ]
});
