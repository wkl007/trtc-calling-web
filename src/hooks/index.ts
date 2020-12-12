import TRTCCalling from 'trtc-calling-js'
// @ts-ignore
import * as LibGenerateTestUserSig from '../../public/js/lib-generate-test-usersig.min'
import { message } from 'ant-design-vue'
import store from '@/store'

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
    trtcCalling.on(TRTCCalling.EVENT.INVITED, handleInvited)
    trtcCalling.on(TRTCCalling.EVENT.USER_ENTER, (e: { userID: string }) => handleUserEnter(trtcCalling, e))
    trtcCalling.on(TRTCCalling.EVENT.USER_LEAVE, handleUserLeave)
    trtcCalling.on(TRTCCalling.EVENT.REJECT, handleEject)
    trtcCalling.on(TRTCCalling.EVENT.LINE_BUSY, handleLineBusy)
    trtcCalling.on(TRTCCalling.EVENT.CALLING_CANCEL, handleCallingCancel)
    trtcCalling.on(TRTCCalling.EVENT.KICKED_OUT, handleKickedOut(trtcCalling))
    trtcCalling.on(TRTCCalling.EVENT.CALLING_TIMEOUT, handleCallingTimeout)
    trtcCalling.on(TRTCCalling.EVENT.NO_RESP, handleNoResp)
    trtcCalling.on(TRTCCalling.EVENT.CALL_END, handleCallEnd(trtcCalling))
    trtcCalling.on(TRTCCalling.EVENT.USER_VIDEO_AVAILABLE, handleUserVideoChange)
    trtcCalling.on(TRTCCalling.EVENT.USER_AUDIO_AVAILABLE, handleUserAudioChange)
  }

  // 移除监听
  function removeListener (trtcCalling: any) {
    if (!trtcCalling) return
    trtcCalling.off(TRTCCalling.EVENT.ERROR, handleError)
    trtcCalling.off(TRTCCalling.EVENT.INVITED, handleInvited)
    trtcCalling.off(TRTCCalling.EVENT.USER_ENTER, (e: { userID: string }) => handleUserEnter(trtcCalling, e))
    trtcCalling.off(TRTCCalling.EVENT.USER_LEAVE, handleUserLeave)
    trtcCalling.off(TRTCCalling.EVENT.REJECT, handleEject)
    trtcCalling.off(TRTCCalling.EVENT.LINE_BUSY, handleLineBusy)
    trtcCalling.off(TRTCCalling.EVENT.CALLING_CANCEL, handleCallingCancel)
    trtcCalling.off(TRTCCalling.EVENT.KICKED_OUT, handleKickedOut(trtcCalling))
    trtcCalling.off(TRTCCalling.EVENT.CALLING_TIMEOUT, handleCallingTimeout)
    trtcCalling.off(TRTCCalling.EVENT.NO_RESP, handleNoResp)
    trtcCalling.off(TRTCCalling.EVENT.CALL_END, handleCallEnd(trtcCalling))
    trtcCalling.off(TRTCCalling.EVENT.USER_VIDEO_AVAILABLE, handleUserVideoChange)
    trtcCalling.off(TRTCCalling.EVENT.USER_AUDIO_AVAILABLE, handleUserAudioChange)
  }

  // 登录
  function handleLogin (trtcCalling: any) {
    const { userInfo: { username } } = store.getters
    trtcCalling.login({
      userID: username,
      userSig: getUserSig()
    })
  }

  // 退出登录
  function handleLogout (trtcCalling: any) {
    trtcCalling.logout()
  }

  function handleError (err: any) {
    console.log(err)
  }

  // 被邀用户收到了邀请通知
  function handleInvited () {}

  // 用户进入通话
  function handleUserEnter (trtcCalling: any, { userID }: { userID: string }) {}

  // 用户离开会话
  function handleUserLeave () {}

  // 被邀用户拒绝通话
  function handleEject ({ userID }: { userID: string }) {
    console.log('被邀用户拒绝通话')
    message.info(`${userID}拒绝通话`)
    dissolveMeeting()
  }

  // 被邀用户正在通话中，忙线
  function handleLineBusy ({ userID }: { userID: string }) {
    console.log('被邀用户正在通话中，忙线')
    message.info(`${userID}忙线`)
    dissolveMeeting()
  }

  // 本次通话被取消了
  function handleCallingCancel () {
    console.log('本次通话被取消了')
    message.info('通话已取消')
    dissolveMeeting()
  }

  // 重复登录，被踢出
  function handleKickedOut (trtcCalling: any) {
    console.log('重复登录，被踢出')
    handleLogout(trtcCalling)
  }

  // 本次通话超时未应答
  function handleCallingTimeout () {
    console.log('本次通话超时未应答')
    message.info('通话超时未应答')
    dissolveMeeting()
  }

  // 被邀用户超时无应答
  function handleNoResp ({ userID }: { userID: string }) {
    console.log('被邀用户超时无应答')
    message.info(`${userID}无应答`)
    dissolveMeeting()
  }

  // 本次通话结束
  function handleCallEnd (trtcCalling: any) {
    console.log('通话已结束')
    message.info('通话已结束')
    trtcCalling.hangup()
    dissolveMeeting()
  }

  function handleUserVideoChange () {}

  function handleUserAudioChange () {}

  // 解散会议
  function dissolveMeeting () {

  }

  return {
    getUserSig,
    initTRTC,
    initListener,
    removeListener,
    handleLogin
  }
}
