import Vue from 'vue';
import VueRouter from 'vou-router';

import Store from '../components/Store';
import ShoppingCart from '../components/ShoppingCart';
import { router } from 'json-server';

Vue.use(router);

export default new VueRouter({
  mode: 'history',
  routes:[
    { path: '/', component: Store },
    { path: '/cart', component: ShoppingCart },
    { path: '*', component: '/' },
  ]
})