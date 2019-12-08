import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PrivateChat from '@/components/PrivateChat'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chat',
      name: 'privatechat',
      component: PrivateChat
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  ]
})
