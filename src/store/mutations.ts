import type { State, TrtcInfo, UserInfo } from '@/types'
import * as types from './mutationTypes'

const mutations = {
  [types.SET_LOGIN_STATUS] (state: State, loginStatus: number): void {
    state.loginStatus = loginStatus
  },
  [types.SET_USER_INFO] (state: State, userInfo: UserInfo): void {
    state.userInfo = userInfo
  },
  [types.SET_TRTC_INFO] (state: State, trtcInfo: TrtcInfo): void {
    state.trtcInfo = trtcInfo
  }
}

export default mutations
