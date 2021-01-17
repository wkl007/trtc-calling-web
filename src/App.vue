<template>
  <a-config-provider :locale="locale">
    <v-nav/>
    <div class="content-container">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, toRaw, watch } from 'vue'
import { useStore } from 'vuex'
import TRTCCalling from 'trtc-calling-js'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import VNav from '@/components/VNav.vue'
import images from '@/assets/images'
import { useTRTC } from '@/hooks'

export default defineComponent({
  name: 'App',
  components: {
    VNav
  },
  setup () {
    const { initListener, removeListener } = useTRTC()
    const store = useStore()
    const loginStatus = computed(() => store.getters.loginStatus)
    const trtcCalling: TRTCCalling = toRaw(computed(() => store.getters.trtcCalling).value)

    watch(loginStatus, (val, oldVal) => {
      if (val) {
        // 登录成功监听
        initListener(trtcCalling)
      } else {
        // 取消登录移除监听
        removeListener(trtcCalling)
      }
    })

    provide('images', reactive(images))
    return {
      locale: reactive(zhCN)
    }
  }
})
</script>

<style lang="less">
@import '~@/assets/styles/index';

.content-container {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}
</style>
