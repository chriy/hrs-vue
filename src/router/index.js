import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/login/Login'
import AdminLogin from '@/components/login/AdminLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { 
      title: "用户登录",
      requireLogin: false
    }
  },
  {
    path: '/admin',
    name: 'AdminLogin',
    component: AdminLogin,
    meta: { 
      title: "管理员登录",
      requireLogin: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


// 前置导航守卫，权限控制
router.beforeEach((to, from, next) => {

  let verify = window.localStorage.getItem("verified")
  if(verify){
    if(to.meta.requireLogin){
      next()
    }else{
      next('/login')
    }
  }



  next()
})

// 后置导航守卫，路由切换后，改变页面标题
router.afterEach( (from,to) => {
  window.document.title = from.meta.title;
  
})

export default router
