import Vue from 'vue';
import Router from 'vue-router';
import ScanPage from './views/ScanPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/scan',
      name: 'scan',
      component: ScanPage,
    },
    {
      path: '/create',
      name: 'create',
      component: () => import(/* webpackChunkName: "create" */ './views/CreatePage.vue'),
    },
    {
      path: '/message/:messageKey',
      name: 'message',
      props: true,
      // meta: { transitionName: 'slide' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "message" */ './views/MessagePage.vue'),
    },
  ],
});
