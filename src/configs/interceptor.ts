import NProgress from 'nprogress'
import router from '@/router'
import store from '@/store'
import 'nprogress/nprogress.css'

const WHITE_LIST = ['/login'] // 重定向白名单

router.beforeEach((to, from, next) => {
  NProgress.start()
  const { loginStatus } = store.getters
  if (loginStatus) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (WHITE_LIST.indexOf(to.path) >= 0) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
  NProgress.done()
})
