import type { SdkInfo, State, TrtcInfo, UserInfo } from '@/types'
import * as types from './mutationTypes'

const mutations = {
  [types.SET_LOGIN_STATUS] (state: State, loginStatus: number): void {
    state.loginStatus = loginStatus
  },
  [types.SET_USER_INFO] (state: State, userInfo: UserInfo): void {
    state.userInfo = userInfo
  },
  [types.SET_TRTC_CALL] (state: State, trtcCalling: any): void {
    state.trtcCalling = trtcCalling
  },
  [types.SET_TRTC_INFO] (state: State, trtcInfo: TrtcInfo): void {
    state.trtcInfo = trtcInfo
  },
  [types.SET_SDK_INFO] (state: State, sdkInfo: SdkInfo): void {
    state.sdkInfo = sdkInfo
  }
}

export default mutations
