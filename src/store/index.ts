import type { App } from 'vue'
import { createLogger, createStore } from 'vuex'
import { NODE_ENV } from '@/utils/constants'
import state from '@/store/state'
import * as getters from '@/store/getters'
import * as actions from '@/store/actions'
import mutations from '@/store/mutations'

// 调试工具，开发环境使用，线上关闭
const debug = NODE_ENV !== 'production'

const store = createStore({
  state,
  mutations,
  getters,
  actions,
  plugins: debug ? [createLogger()] : []
})

/**
 * vuex 配置
 * @param app
 */
export function setupStore (app: App<Element>): void {
  app.use(store)
}

export default store
