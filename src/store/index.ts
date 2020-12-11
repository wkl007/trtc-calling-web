import type { App } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})

/**
 * vuex 配置
 * @param app
 */
export function setupStore (app: App<Element>): void {
  app.use(store)
}

export default store
