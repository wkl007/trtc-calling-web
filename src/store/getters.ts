import type { State, TrtcInfo, UserInfo } from '@/types'

export const loginStatus = (state: State): number => state.loginStatus

export const userInfo = (state: State): UserInfo => state.userInfo

export const trtcInfo = (state: State): TrtcInfo => state.trtcInfo
