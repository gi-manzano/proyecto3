import Vue from 'vue'
import router from 'vue-router'

import LoginPage from './pages/LoginPage.vue';
import ResigstroPage from './pages/RegistroPage.vue'
import HomePage from './pages/HomePage.vue';
import AdminPage from './pages/AdminPage.vue';
import CreatePage from './pages/CreatePage.vue';
import EditarPage from './pages/EditarPage.vue';
import CarritoPage from './pages/CarritoPage.vue';


Vue.use(router);

export default new router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login',component: LoginPage, props: true},
    {path: '/registro',component: ResigstroPage, props: true},
    {path: '/home', component: HomePage ,props: true},
    {path: '/home/:id',component: HomePage ,props: true},
    {path: '/admin', component: AdminPage, props: true},
    {path: '/admin/create', component: CreatePage, props: true},
    {path: '/admin/edit/:id', component: EditarPage, props: true},
    {path: '/carrito/:id', component: CarritoPage, props: true},
   
    ]
  });