import TRTCCalling from 'trtc-calling-js'
// @ts-ignore
import * as LibGenerateTestUserSig from '../../public/js/lib-generate-test-usersig.min'
import { message, Modal } from 'ant-design-vue'
import store from '@/store'
import router from '@/router'

interface UseTRTC {
  getUserSig: () => { userSig: string },
  initTRTC: () => { trtcCalling: any },
  initListener: (trtcCalling: any) => void,
  removeListener: (trtcCalling: any) => void,
  handleLogin: (trtcCalling: any) => void
}

export function useTRTC (): UseTRTC {
  // 前端生成签名
  function getUserSig () {
    const EXPIRE_TIME = 604800 // 签名过期时间
    const { sdkInfo: { sdkAppId, secretKey }, userInfo: { username } } = store.getters
    // eslint-disable-next-line new-cap
    const generator = new LibGenerateTestUserSig.default(Number(sdkAppId), secretKey, EXPIRE_TIME)
    return generator.genTestUserSig(username)
  }

  // 初始化TRTC实例
  function initTRTC () {
    const { sdkInfo: { sdkAppId } } = store.getters
    const options = {
      SDKAppID: sdkAppId
    }
    return new TRTCCalling(options)
  }

  // 初始化监听
  function initListener (trtcCalling: any) {
    if (!trtcCalling) return
    trtcCalling.on(TRTCCalling.EVENT.ERROR, handleError)
    trtcCalling.on(TRTCCalling.EVENT.INVITED, (e: { sponsor: string; userIDList: string[]; isFromGroup: boolean; inviteData: any; inviteID: string }) => handleInvited(trtcCalling, e))
    trtcCalling.on(TRTCCalling.EVENT.USER_ENTER, (e: { userID: string }) => handleUserEnter(trtcCalling, e))
    trtcCalling.on(TRTCCalling.EVENT.USER_LEAVE, handleUserLeave)
    trtcCalling.on(TRTCCalling.EVENT.REJECT, handleEject)
    trtcCalling.on(TRTCCalling.EVENT.LINE_BUSY, handleLineBusy)
    trtcCalling.on(TRTCCalling.EVENT.CALLING_CANCEL, handleCallingCancel)
    trtcCalling.on(TRTCCalling.EVENT.KICKED_OUT, () => handleKickedOut(trtcCalling))
    trtcCalling.on(TRTCCalling.EVENT.CALLING_TIMEOUT, handleCallingTimeout)
    trtcCalling.on(TRTCCalling.EVENT.NO_RESP, handleNoResp)
    trtcCalling.on(TRTCCalling.EVENT.CALL_END, () => handleCallEnd(trtcCalling))
    trtcCalling.on(TRTCCalling.EVENT.USER_VIDEO_AVAILABLE, handleUserVideoChange)
    trtcCalling.on(TRTCCalling.EVENT.USER_AUDIO_AVAILABLE, handleUserAudioChange)
  }

  // 移除监听
  function removeListener (trtcCalling: any) {
    if (!trtcCalling) return
    trtcCalling.off(TRTCCalling.EVENT.ERROR, handleError)
    trtcCalling.off(TRTCCalling.EVENT.INVITED, (e: { sponsor: string; userIDList: string[]; isFromGroup: boolean; inviteData: any; inviteID: string }) => handleInvited(trtcCalling, e))
    trtcCalling.off(TRTCCalling.EVENT.USER_ENTER, (e: { userID: string }) => handleUserEnter(trtcCalling, e))
    trtcCalling.off(TRTCCalling.EVENT.USER_LEAVE, handleUserLeave)
    trtcCalling.off(TRTCCalling.EVENT.REJECT, handleEject)
    trtcCalling.off(TRTCCalling.EVENT.LINE_BUSY, handleLineBusy)
    trtcCalling.off(TRTCCalling.EVENT.CALLING_CANCEL, handleCallingCancel)
    trtcCalling.off(TRTCCalling.EVENT.KICKED_OUT, () => handleKickedOut(trtcCalling))
    trtcCalling.off(TRTCCalling.EVENT.CALLING_TIMEOUT, handleCallingTimeout)
    trtcCalling.off(TRTCCalling.EVENT.NO_RESP, handleNoResp)
    trtcCalling.off(TRTCCalling.EVENT.CALL_END, () => handleCallEnd(trtcCalling))
    trtcCalling.off(TRTCCalling.EVENT.USER_VIDEO_AVAILABLE, handleUserVideoChange)
    trtcCalling.off(TRTCCalling.EVENT.USER_AUDIO_AVAILABLE, handleUserAudioChange)
  }

  // 登录
  async function handleLogin (trtcCalling: any) {
    try {
      const { userInfo: { username } } = store.getters
      trtcCalling.login({
        userID: username,
        userSig: getUserSig()
      })
    } catch (e) {}
  }

  // 退出登录
  async function handleLogout (trtcCalling: any) {
    try {
      trtcCalling.logout()
      await store.dispatch('setLoginStatus', 0)
      await store.dispatch('setUserInfo', { username: '' })
      await router.push({ path: '/login' })
    } catch (e) {}
  }

  function handleError (err: any) {
    console.log(err)
  }

  // 被邀用户收到了邀请通知
  async function handleInvited (trtcCalling: any, {
    sponsor,
    userIDList,
    isFromGroup,
    inviteData,
    inviteID
  }: { sponsor: string, userIDList: Array<string>, isFromGroup: boolean, inviteData: any, inviteID: string }) {
    try {
      console.log('被邀用户收到了邀请通知')
      const { trtcInfo, userInfo: { username } } = store.getters
      // 最后一个人发送 invite 进行挂断
      if (inviteData.callEnd) {
        trtcInfo.callStatus = 'idle'
        await store.dispatch('setTrtcInfo', trtcInfo)
        return
      }
      // 邀请人是自己, 同一个账号有可能在多端登录
      if (sponsor === username) return
      // 考虑忙线的情况
      if (trtcInfo.callStatus === 'calling' || trtcInfo.callStatus === 'connected') {
        await trtcCalling.reject({ inviteID, isBusy: true })
        return
      }
      // 接通会话
      const { callType, roomID } = inviteData // 1：语音通话，2：视频通话
      trtcInfo.callStatus = 'calling'
      trtcInfo.isInviter = false
      const callTypeDisplayName = callType === TRTCCalling.CALL_TYPE.AUDIO_CALL ? '语音通话' : '视频通话'
      await store.dispatch('setTrtcInfo', trtcInfo)
      Modal.confirm({
        content: `来自${sponsor}的${callTypeDisplayName}`,
        okText: '接听',
        cancelText: '拒绝',
        onOk: async () => {
          if (trtcInfo.meetingUserIdList.indexOf(username) < 0) trtcInfo.meetingUserIdList.push(username)
          await store.dispatch('setTrtcInfo', trtcInfo)
          trtcCalling.accept({
            inviteID,
            roomID,
            callType
          })
          if (callType === TRTCCalling.CALL_TYPE.AUDIO_CALL) {
            await router.push({ path: '/audioCall' })
          }
          if (callType === TRTCCalling.CALL_TYPE.VIDEO_CALL) {
            await router.push({ path: '/videoCall' })
          }
        },
        onCancel: async () => {
          trtcCalling.reject({
            inviteID,
            isBusy: false,
            callType
          })
          await dissolveMeeting()
        }
      })
    } catch (e) {}
  }

  // 用户进入通话
  async function handleUserEnter (trtcCalling: any, { userID }: { userID: string }) {
    console.log('用户进入通话')
    const { trtcInfo } = store.getters
    if (trtcInfo.meetingUserIdList.indexOf(userID) < 0) trtcInfo.meetingUserIdList.push(userID)
    if (trtcInfo.callStatus === 'calling') {
      // 如果是邀请者, 则建立连接
      // TODO
      trtcInfo.callStatus = 'connected'
    } else {
      // 第n (n >= 3)个人被邀请入会, 并且他不是第 n 个人的邀请人
      // 需要先等远程用户 id 的节点渲染到 dom 上
      // TODO
      trtcCalling.startRemoteView({
        userID,
        videoViewDomID: `video-${userID}`
      })
    }
    await store.dispatch('setTrtcInfo', trtcInfo)
  }

  // 用户离开会话
  async function handleUserLeave ({ userID }: { userID: string }) {
    console.log('用户离开会话')
    const { trtcInfo } = store.getters
    if (trtcInfo.meetingUserIdList.length === 2) trtcInfo.callStatus = 'idle'
    const index = trtcInfo.meetingUserIdList.findIndex((item: string) => item === userID)
    if (index >= 0) trtcInfo.meetingUserIdList.splice(index, 1)
    await store.dispatch('setTrtcInfo', trtcInfo)
  }

  // 被邀用户拒绝通话
  async function handleEject ({ userID }: { userID: string }) {
    console.log('被邀用户拒绝通话')
    message.info(`${userID}拒绝通话`)
    await dissolveMeeting()
  }

  // 被邀用户正在通话中，忙线
  async function handleLineBusy ({ userID }: { userID: string }) {
    console.log('被邀用户正在通话中，忙线')
    message.info(`${userID}忙线`)
    await dissolveMeeting()
  }

  // 本次通话被取消了
  async function handleCallingCancel () {
    console.log('本次通话被取消了')
    message.info('通话已取消')
    await dissolveMeeting()
  }

  // 重复登录，被踢出
  async function handleKickedOut (trtcCalling: any) {
    console.log('重复登录，被踢出')
    message.info('重复登录，被踢出')
    // await handleLogout(trtcCalling)
  }

  // 本次通话超时未应答
  async function handleCallingTimeout () {
    console.log('本次通话超时未应答')
    message.info('通话超时未应答')
    await dissolveMeeting()
  }

  // 被邀用户超时无应答
  async function handleNoResp ({ userID }: { userID: string }) {
    console.log('被邀用户超时无应答')
    message.info(`${userID || '被邀用户'}无应答`)
    await dissolveMeeting()
  }

  // 本次通话结束
  async function handleCallEnd (trtcCalling: any) {
    console.log('通话已结束')
    message.info('通话已结束')
    trtcCalling.hangup()
    await dissolveMeeting()
  }

  // 远端用户开启/关闭了摄像头
  async function handleUserVideoChange ({ userID, isVideoAvailable }: { userID: string, isVideoAvailable: boolean }) {
    console.log('远端用户开启/关闭了摄像头')
    const { trtcInfo } = store.getters
    if (isVideoAvailable) {
      trtcInfo.muteVideoUserIdList = trtcInfo.muteVideoUserIdList.filter((item: string) => item !== userID)
    } else {
      trtcInfo.muteVideoUserIdList = [...trtcInfo.muteVideoUserIdList, userID]
    }
    await store.dispatch('setTrtcInfo', trtcInfo)
  }

  // 远端用户开启/关闭了麦克风
  async function handleUserAudioChange ({ userID, isAudioAvailable }: { userID: string, isAudioAvailable: boolean }) {
    console.log('远端用户开启/关闭了麦克风')
    const { trtcInfo } = store.getters
    if (isAudioAvailable) {
      trtcInfo.muteAudioUserIdList = trtcInfo.muteAudioUserIdList.filter((item: string) => item !== userID)
    } else {
      trtcInfo.muteAudioUserIdList = [...trtcInfo.muteAudioUserIdList, userID]
    }
    await store.dispatch('setTrtcInfo', trtcInfo)
  }

  // 解散会议
  async function dissolveMeeting () {
    const { trtcInfo } = store.getters
    trtcInfo.callStatus = 'idle'
    if (trtcInfo.meetingUserIdList.length < 2) {
      trtcInfo.meetingUserIdList = []
      trtcInfo.muteVideoUserIdList = []
      trtcInfo.muteAudioUserIdList = []
    }
    await store.dispatch('setTrtcInfo', trtcInfo)
  }

  return {
    getUserSig,
    initTRTC,
    initListener,
    removeListener,
    handleLogin
  }
}
