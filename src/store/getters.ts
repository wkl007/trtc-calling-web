import type { SdkInfo, State, TrtcInfo, UserInfo } from '@/types'

export const loginStatus = (state: State): number => state.loginStatus

export const userInfo = (state: State): UserInfo => state.userInfo

export const trtcCalling = (state: State): any => state.trtcCalling

export const trtcInfo = (state: State): TrtcInfo => state.trtcInfo

export const sdkInfo = (state: State): SdkInfo => state.sdkInfo
