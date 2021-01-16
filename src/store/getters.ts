import type { SdkInfo, State, TrtcInfo, UserInfo } from '@/types'
import TRTCCalling from 'trtc-calling-js'

export const loginStatus = (state: State): number => state.loginStatus

export const userInfo = (state: State): UserInfo => state.userInfo

export const trtcCalling = (state: State): TRTCCalling => state.trtcCalling

export const trtcInfo = (state: State): TrtcInfo => state.trtcInfo

export const sdkInfo = (state: State): SdkInfo => state.sdkInfo
