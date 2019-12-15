import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../components/MainPage/Mainpage.vue';
import ListServices from '../views/ListServices/ListServices.vue';
import SpecificService from '../views/SpecificService/SpecificService.vue';

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
      {
        path: 'service/:id',
        component: SpecificService,
        props: true,
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
