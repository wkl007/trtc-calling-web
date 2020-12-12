import TRTCCalling from 'trtc-calling-js'
// @ts-ignore
import * as LibGenerateTestUserSig from '../../public/js/lib-generate-test-usersig.min'
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
    trtcCalling.on(TRTCCalling.EVENT.USER_ENTER, handleUserEnter)
    trtcCalling.on(TRTCCalling.EVENT.USER_LEAVE, handleUserLeave)
    trtcCalling.on(TRTCCalling.EVENT.REJECT, handleEject)
    trtcCalling.on(TRTCCalling.EVENT.LINE_BUSY, handleLineBusy)
    trtcCalling.on(TRTCCalling.EVENT.CALLING_CANCEL, handleCallingCancel)
    trtcCalling.on(TRTCCalling.EVENT.KICKED_OUT, handleKickedOut)
    trtcCalling.on(TRTCCalling.EVENT.CALLING_TIMEOUT, handleCallingTimeout)
    trtcCalling.on(TRTCCalling.EVENT.NO_RESP, handleNoResp)
    trtcCalling.on(TRTCCalling.EVENT.CALL_END, handleCallEnd)
    trtcCalling.on(TRTCCalling.EVENT.USER_VIDEO_AVAILABLE, handleUserVideoChange)
    trtcCalling.on(TRTCCalling.EVENT.USER_AUDIO_AVAILABLE, handleUserAudioChange)
  }

  // 移除监听
  function removeListener (trtcCalling: any) {
    if (!trtcCalling) return
    trtcCalling.off(TRTCCalling.EVENT.ERROR, handleError)
    trtcCalling.off(TRTCCalling.EVENT.INVITED, handleInvited)
    trtcCalling.off(TRTCCalling.EVENT.USER_ENTER, handleUserEnter)
    trtcCalling.off(TRTCCalling.EVENT.USER_LEAVE, handleUserLeave)
    trtcCalling.off(TRTCCalling.EVENT.REJECT, handleEject)
    trtcCalling.off(TRTCCalling.EVENT.LINE_BUSY, handleLineBusy)
    trtcCalling.off(TRTCCalling.EVENT.CALLING_CANCEL, handleCallingCancel)
    trtcCalling.off(TRTCCalling.EVENT.KICKED_OUT, handleKickedOut)
    trtcCalling.off(TRTCCalling.EVENT.CALLING_TIMEOUT, handleCallingTimeout)
    trtcCalling.off(TRTCCalling.EVENT.NO_RESP, handleNoResp)
    trtcCalling.off(TRTCCalling.EVENT.CALL_END, handleCallEnd)
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

  function handleError (err: any) {
    console.log(err)
  }

  function handleInvited () {}

  function handleUserEnter () {}

  function handleUserLeave () {}

  function handleEject () {}

  function handleLineBusy () {}

  function handleCallingCancel () {}

  function handleKickedOut () {}

  function handleCallingTimeout () {}

  function handleNoResp () {}

  function handleCallEnd () {}

  function handleUserVideoChange () {}

  function handleUserAudioChange () {}

  return {
    getUserSig,
    initTRTC,
    initListener,
    removeListener,
    handleLogin
  }
}
