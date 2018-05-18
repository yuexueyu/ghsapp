import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserRegistration from '@/components/users/UserRegistration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/registration',
      name: 'UserRegistration',
      component: UserRegistration
    }
  ]
})
