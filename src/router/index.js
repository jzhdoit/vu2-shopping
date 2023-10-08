import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import layout from '@/views/layout'
import pay from '@/views/pay'
import search from '@/views/search'
import searchlist from '@/views/search/list'

import home from '@/views/layout/home'
import category from '@/views/layout/category'
import user from '@/views/layout/user'
import store from '@/store'

const comment = () => import('@/views/prodetail/comment.vue')
const prodetail = () => import('@/views/prodetail')
const cart = () => import('@/views/layout/cart')
const myorder = () => import('@/views/myorder')
const orderComment = () => import('@/views/myorder/orderComment.vue')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login', component: login
    },
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children: [
        { path: '/home', component: home },
        { path: '/category', component: category },
        { path: '/cart', component: cart },
        { path: '/user', component: user }
      ]
    },
    {
      path: '/search', component: search
    },
    {
      path: '/searchlist', component: searchlist
    },
    {
      path: '/pay', component: pay
    },
    {
      path: '/myorder',
      component: myorder

    },
    {
      path: '/prodetail/:id', component: prodetail
    },
    {
      path: '/comment/:id', component: comment
    },
    {
      path: '/orderComment', component: orderComment
    }

  ]
})

const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    next()
    return
  }
  // 是权限页面，需要判断token
  const token = store.getters.token
  console.log(token)
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
