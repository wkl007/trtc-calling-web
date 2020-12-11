import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/videoCall',
    name: 'VideoCall',
    component: () => import(/* webpackChunkName: "videoCall" */ '@/views/VideoCall.vue')
  },
  {
    path: '/audioCall',
    name: 'AudioCall',
    component: () => import(/* webpackChunkName: "audioCall" */ '@/views/AudioCall.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        left: 0,
        top: 0
      }
    }
  }
})

/**
 * vue-router 配置
 * @param app
 */
export function setupRouter (app: App<Element>): void {
  app.use(router)
}

export default router
