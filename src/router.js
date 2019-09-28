import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
 const NewGame = () => import(/* webpackChunkName: "form" */ '@/components/Form.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/newgame',
      name: 'newgame',
      component: NewGame
    }
  ]
})
