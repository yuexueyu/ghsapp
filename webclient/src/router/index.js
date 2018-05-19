import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserRegistration from '@/components/users/UserRegistration'
import UserLogin from '@/components/users/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/user/registration',
      name: 'UserRegistration',
      component: UserRegistration
    },
    {
      path: '/user/login',
      name: 'UserLogin',
      component: UserLogin
    }

  ]
})
