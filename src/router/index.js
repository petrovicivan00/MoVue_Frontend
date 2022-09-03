import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import MovieDepartment from '@/views/MovieDepartment.vue';
import ShowDepartment from '@/views/ShowDepartment.vue';
import StandupDepartment from '@/views/StandupDepartment.vue';
import AnimeDepartment from '@/views/AnimeDepartment.vue';
import AddDepartment from '@/views/AddDepartment.vue';
import SingleMovie from '@/views/SingleMovie.vue';
import SingleShow from '@/views/SingleShow.vue';
import SingleStandup from '@/views/SingleStandup.vue';
import SingleAnime from '@/views/SingleAnime.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'MovieDepartment',
    component: MovieDepartment
  },
  {
    path: '/shows',
    name: 'ShowDepartment',
    component: ShowDepartment
  },
  {
    path: '/standups',
    name: 'StandupDepartment',
    component: StandupDepartment
  },
  {
    path: '/animes',
    name: 'AnimeDepartment',
    component: AnimeDepartment
  },
  {
    path: '/add',
    name: 'AddDepartment',
    component: AddDepartment
  },
  {
    path: '/movie',
    name: 'SingleMovie',
    component: SingleMovie
  },
  {
    path: '/show',
    name: 'SingleShow',
    component: SingleShow
  },
  {
    path: '/standup',
    name: 'SingleStandup',
    component: SingleStandup
  },
  {
    path: '/anime',
    name: 'SingleAnime',
    component: SingleAnime
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
