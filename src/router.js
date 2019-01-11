import Vue from 'vue';
import Router from 'vue-router';
import ScanPage from './views/ScanPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'scan',
      component: ScanPage,
    },
    {
      path: '/message/:messageKey',
      name: 'message',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/MessagePage.vue'),
    },
  ],
});
