<template>
  <div class="audio-call">
    <p class="title">语音通话</p>
    <call-form
      v-if="trtcInfo.callStatus!=='connected'"
      @submit="handleCallUser"
      @cancel="handleCancelCallUser"
    />
    <div
      class="audio-area"
      v-if="trtcInfo.callStatus==='connected'&&showAudioCall"
    >
      <p class="area-title">语音通话区域</p>
      <div class="audio-list">
        <div
          class="audio-item"
          v-for="(item,index) in trtcInfo.meetingUserIdList"
          :key="index"
        >
          <div class="status-area">
            <div
              class="audio-status"
              :style="{backgroundImage:`url(${isUserMute(trtcInfo.muteAudioUserIdList,item)?images.micOff:images.micOn})`}"
            ></div>
          </div>
          <div class="audio-username">{{ item }}{{ item === userInfo.username ? '(本人)' : '' }}</div>
        </div>
      </div>
      <div class="operation-wrapper">
        <a-space size="large">
          <a-button
            type="primary"
            size="large"
            @click="toggleAudioStatus"
          >
            {{ isAudioOn ? '关闭麦克风' : '打开麦克风' }}
          </a-button>
          <a-button
            type="danger"
            size="large"
            @click="handleHangup"
          >
            挂断
          </a-button>
        </a-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onBeforeUnmount, onMounted, ref, toRaw, watch } from 'vue'
import { useStore } from 'vuex'
import TRTCCalling from 'trtc-calling-js'
import CallForm from '@/components/CallForm.vue'

export default defineComponent({
  name: 'AudioCall',
  components: {
    CallForm
  },
  setup () {
    const store = useStore()
    const images = inject('images')
    const trtcInfo = computed(() => store.getters.trtcInfo)
    const userInfo = computed(() => store.getters.userInfo)
    const trtcCalling: any = computed(() => store.getters.trtcCalling)
    const showAudioCall = ref(false) // 显示音频区域
    const isAudioOn = ref(true) // 麦克风状态

    // 呼叫用户
    async function handleCallUser (values: { username: string }) {
      const trtcInfoData = trtcInfo.value
      const { username } = userInfo.value
      await toRaw(trtcCalling.value).call({
        userID: values.username,
        type: TRTCCalling.CALL_TYPE.AUDIO_CALL, // 语音通话
        timeout: 30 // 超时30s
      })
      trtcInfoData.callStatus = 'calling'
      trtcInfoData.isInviter = true
      if (trtcInfoData.meetingUserIdList.indexOf(username) < 0) trtcInfoData.meetingUserIdList.push(username)
      await store.dispatch('setTrtcInfo', trtcInfoData)
    }

    // 取消呼叫
    async function handleCancelCallUser () {
      const trtcInfoData = trtcInfo.value
      await toRaw(trtcCalling.value).hangup()
      trtcInfoData.callStatus = 'idle'
      trtcInfoData.meetingUserIdList = []
      trtcInfoData.muteVideoUserIdList = []
      trtcInfoData.muteAudioUserIdList = []
      await store.dispatch('setTrtcInfo', trtcInfoData)
    }

    // 开始会议
    function startMeeting () {
      showAudioCall.value = true
    }

    // 挂断会议
    async function handleHangup () {
      const trtcInfoData = trtcInfo.value
      await toRaw(trtcCalling.value).hangup()
      showAudioCall.value = false
      trtcInfoData.callStatus = 'idle'
      await store.dispatch('setTrtcInfo', trtcInfoData)
    }

    // 打开/关闭麦克风
    async function toggleAudioStatus () {
      const trtcInfoData = trtcInfo.value
      const { username } = userInfo.value
      isAudioOn.value = !isAudioOn.value
      toRaw(trtcCalling.value).setMicMute(!isAudioOn.value)
      if (isAudioOn.value) {
        trtcInfoData.muteAudioUserIdList = trtcInfoData.muteAudioUserIdList.filter((item: string) => item !== username)
      } else {
        trtcInfoData.muteAudioUserIdList.push(username)
      }
      await store.dispatch('setTrtcInfo', trtcInfoData)
    }

    // 判断是否关闭媒体
    function isUserMute (muteUserList: Array<string>, userId: string): boolean {
      return muteUserList.indexOf(userId) !== -1
    }

    watch(() => trtcInfo.value.callStatus, (val, oldVal) => {
      if (val !== oldVal && val === 'connected') {
        startMeeting()
      }
    })

    onMounted(() => {
      const trtcInfoData = trtcInfo.value
      if (trtcInfoData.callStatus === 'connected' && !trtcInfoData.isInviter) {
        startMeeting()
      }
    })

    onBeforeUnmount(() => {
      const trtcInfoData = trtcInfo.value
      trtcInfoData.muteVideoUserIdList = []
      trtcInfoData.muteAudioUserIdList = []
      if (trtcInfoData.callStatus === 'connected') {
        toRaw(trtcCalling.value).hangup()
        trtcInfoData.callStatus = 'idle'
      }
      store.dispatch('setTrtcInfo', trtcInfoData)
    })

    return {
      images,
      trtcInfo,
      userInfo,
      showAudioCall,
      isAudioOn,
      handleCallUser,
      handleCancelCallUser,
      toggleAudioStatus,
      handleHangup,
      isUserMute
    }
  }
})
</script>

<style scoped lang="less">
.audio-call {
  .title {
    margin-top: 100px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }

  .audio-area {
    .area-title {
      font-size: 16px;
      text-align: center;
    }

    .audio-list {
      display: flex;
      justify-content: center;
      margin: 0 auto;

      .audio-item {
        position: relative;
        box-sizing: border-box;
        width: 360px;
        height: 240px;
        margin: 10px;
        text-align: left;
        background: #000;

        .status-area {
          .audio-status {
            position: absolute;
            right: 20px;
            bottom: 20px;
            z-index: 10;
            width: 22px;
            height: 27px;
            background-size: cover;
          }
        }
      }

      .audio-username {
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 10;
        color: #fff;
      }
    }

    .operation-wrapper {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
