import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Movies from '@/components/Movies/Index'
import AddMovie from '@/components/AddMovie'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movies/add',
      name: 'movies-add',
      component: AddMovie
    },
    {
      path: '*',
      redirect: 'movies'
    }
  ]
})
