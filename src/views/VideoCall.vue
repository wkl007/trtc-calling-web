<template>
  <div class="video-call">
    <p class="title">视频通话</p>
    <call-form
      v-if="trtcInfo.callStatus!=='connected'"
      @submit="handleCallUser"
      @cancel="handleCancelCallUser"
    />
    <div
      class="video-area"
      v-if="trtcInfo.callStatus==='connected'&&showVideoCall"
    >
      <p class="area-title">视频通话区域</p>
      <div class="video-list">
        <div
          class="video-item"
          v-for="(item,index) in trtcInfo.meetingUserIdList"
          :key="index"
          :id="`video-${item}`"
        >
          <div class="status-area">
            <div class="video-status"></div>
            <div class="audio-status"></div>
          </div>
          <div class="video-username">{{ userNameList[item] || item }}</div>
        </div>
      </div>
      <div class="operation-wrapper">
        <a-space size="large">
          <a-button
            type="primary"
            size="large"
            @click="toggleVideoStatus"
          >
            {{ isVideoOn ? '关闭摄像头' : '打开摄像头' }}
          </a-button>
          <a-button
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
import { computed, defineComponent, onBeforeMount, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import CallForm from '@/components/CallForm.vue'

export default defineComponent({
  name: 'VideoCall',
  components: {
    CallForm
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const trtcInfo = computed(() => store.getters.trtcInfo)
    const showVideoCall = ref(false) // 显示视频区域
    const isVideoOn = ref(true) // 视频状态
    const isAudioOn = ref(true) // 麦克风状态
    const userNameList = reactive({})

    function handleCallUser (values: { username: string }) {
      console.log(values)
    }

    function handleCancelCallUser () {
      console.log('取消')
    }

    // 打开/关闭摄像头
    function toggleVideoStatus () {}

    // 打开/关闭麦克风
    function toggleAudioStatus () {}

    // 挂断会议
    function handleHangup () {}

    onBeforeMount(() => {

    })

    return {
      trtcInfo,
      showVideoCall,
      isVideoOn,
      isAudioOn,
      userNameList,
      handleCallUser,
      handleCancelCallUser,
      toggleVideoStatus,
      toggleAudioStatus,
      handleHangup
    }
  }
})
</script>

<style scoped lang="less">
.video-call {
  .title {
    margin-top: 100px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }

  .video-area {
    .area-title {
      font-size: 16px;
    }

    .video-list {
      display: flex;
      justify-content: center;
      margin: 0 auto;

      .video-item {
        position: relative;
        box-sizing: border-box;
        width: 360px;
        height: 240px;
        margin: 10px;
        text-align: left;
        border: 1px solid red;

        .status-area {
          .video-status {
            position: absolute;
            right: 50px;
            bottom: 20px;
            z-index: 10;
            width: 24px;
            height: 27px;
            background-size: cover;
          }

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

        .video-username {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 10;
          color: #fff;
        }
      }
    }

    .operation-wrapper {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
