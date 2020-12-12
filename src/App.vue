<template>
  <a-config-provider :locale="locale">
    <v-nav/>
    <div class="content-container">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import VNav from '@/components/VNav.vue'
import images from '@/assets/images'

export default defineComponent({
  name: 'App',
  components: {
    VNav
  },
  setup () {
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
