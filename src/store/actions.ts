import type { Commit } from 'vuex'
import type { SdkInfo, State, TrtcInfo, UserInfo } from '@/types'
import * as types from '@/store/mutationTypes'

export interface CommitFunction {
  commit: Commit
}

export interface CommitStateFunction extends CommitFunction {
  state: State
}

/**
 * 设置登录态
 * @param commit
 * @param loginStatus
 */
export function setLoginStatus ({ commit }: CommitFunction, loginStatus: number): void {
  commit(types.SET_LOGIN_STATUS, loginStatus)
}

/**
 * 设置用户信息
 * @param commit
 * @param userInfo
 */
export function setUserInfo ({ commit }: CommitFunction, userInfo: UserInfo): void {
  commit(types.SET_USER_INFO, userInfo)
}

/**
 * 设置trtc实例
 * @param commit
 * @param trtcCalling
 */
export function setTrtcCalling ({ commit }: CommitFunction, trtcCalling: any): void {
  commit(types.SET_TRTC_CALL, trtcCalling)
}

/**
 * 设置trtc信息
 * @param commit
 * @param trtcInfo
 */
export function setTrtcInfo ({ commit }: CommitFunction, trtcInfo: TrtcInfo): void {
  commit(types.SET_TRTC_INFO, trtcInfo)
}

/**
 * 设置sdk信息
 * @param commit
 * @param sdkInfo
 * @param cache
 */
export function setSdkInfo ({ commit }: CommitFunction, sdkInfo: SdkInfo): void {
  commit(types.SET_SDK_INFO, sdkInfo)
}
