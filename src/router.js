import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/User.vue'),
      children: [
        {
          path: '/user-info',
          name: 'user-info',
          component: () => import(/* webpackChunkName: "about" */ '@/components/UserInfo.vue'),
        },
        {
          path: '/user-setting',
          name: 'user-setting',
          component: () => import('@/components/UserSetting.vue'),
        }
      ]
    },
    {
      path: '/pay-center',
      name: 'pay-center',
      component: () => import('@/views/PayCenter.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/views/SignIn.vue'),
      children: [
        {
          path: '/sign-in-plane',
          name: 'sign-in-plane',
          component: () => import('@/components/SignInPlane.vue'),
        },
        {
          path: '/sign-up-plane',
          name: 'sign-up-plane',
          component: () => import('@/components/SignUpPlane.vue'),
        }
      ]
    }
  ]
})
