export interface UserInfo {
  username: string
}

export interface TrtcInfo {
  callStatus: string,
  isInviter: boolean,
  meetingUserIdList: Array<string>,
  muteVideoUserIdList: Array<string>,
  muteAudioUserIdList: Array<string>
}

export interface SdkInfo {
  sdkAppId: string,
  secretKey: string
}

export interface State {
  loginStatus: number,
  userInfo: UserInfo,
  trtcCalling: any,
  trtcInfo: TrtcInfo,
  sdkInfo: SdkInfo
}
