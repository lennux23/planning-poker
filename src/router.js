import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const FormLobby = () => import(/* webpackChunkName: "form" */ '@/views/FormLobby.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lobby/:option',
      name: 'lobby',
      component: FormLobby
    }
  ]
})
