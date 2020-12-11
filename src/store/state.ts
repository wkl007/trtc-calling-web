import type { State } from '@/types'

const state: State = {
  loginStatus: 0,
  userInfo: {
    username: ''
  },
  trtcInfo: {
    callStatus: 'idle', // 通话状态, idle, calling, connected
    isInviter: false, // 邀请者
    meetingUserIdList: [], // 会话用户ID列表
    muteVideoUserIdList: [], // 关闭摄像头用户ID列表
    muteAudioUserIdList: [] // 关闭麦克风用户ID列表
  }
}

export default state
