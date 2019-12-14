import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../components/MainPage/Mainpage.vue';
import ListServices from '../views/ListServices/ListServices.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: '',
        component: ListServices,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
