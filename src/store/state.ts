import type { State } from '@/types'
import { loadStorage } from '@/utils/cache'
import { SDK_INFO } from '@/utils/constants'

const state: State = {
  loginStatus: 0,
  userInfo: {
    username: ''
  },
  trtcCalling: undefined, // trtc实例
  trtcInfo: {
    callStatus: 'idle', // 通话状态, idle, calling, connected
    isInviter: false, // 邀请者
    meetingUserIdList: [], // 会话用户ID列表
    muteVideoUserIdList: [], // 关闭摄像头用户ID列表
    muteAudioUserIdList: [] // 关闭麦克风用户ID列表
  },
  sdkInfo: loadStorage(SDK_INFO, { sdkAppId: '', secretKey: '' }) // sdk信息
}

export default state
