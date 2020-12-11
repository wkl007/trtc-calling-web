<template>
  <div class="nav">
    <div class="nav-container">
      <a-row v-bind="navLayout.Row">
        <a-col v-bind="navLayout.LeftCol">
          <p class="title">
            Vue 3.0 TRTC实时音视频演示
          </p>
        </a-col>
        <a-col v-bind="navLayout.RightCol">
          <div class="operation-wrapper">
            <a-dropdown>
              <div class="user-info">
                {{ userInfo.username || '暂未登录' }}
              </div>
              <template #overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="detect">设备检测</a-menu-item>
                  <a-menu-item key="logout" v-if="userInfo.username">退出登录</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import { useStore } from 'vuex'

const NAV_LAYOUT = {
  Row: {
    gutter: 0
  },
  LeftCol: {
    xs: 12,
    sm: 8,
    md: 8,
    lg: 8,
    xl: 8,
    xxl: 8
  },
  RightCol: {
    xs: 12,
    sm: 16,
    md: 16,
    lg: 16,
    xl: 16,
    xxl: 16
  }
}

export default defineComponent({
  name: 'VNav',
  setup () {
    const store = useStore()

    const userInfo = computed(() => store.getters.userInfo)
    const navLayout = reactive(NAV_LAYOUT)

    function handleMenuClick ({ key }: { key: string }) {
      console.log(key)
      switch (key) {
        case 'detect':
          window.open('https://trtc-1252463788.cos.ap-guangzhou.myqcloud.com/web/demo/env-detect/index.html')
          break
        case 'logout':
          break
      }
    }

    return {
      userInfo,
      navLayout,
      handleMenuClick
    }
  }
})
</script>

<style scoped lang="less">
@import "~ant-design-vue/lib/style/themes/default";

.nav {
  position: relative;
  z-index: 10;
  max-width: 100%;
  height: 64px;
  color: #fff;
  line-height: 64px;
  background: #1976d2;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);

  .nav-container {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;

    .title {
      margin-bottom: 0;
      margin-left: 8px;
      font-size: 20px;
      cursor: pointer;

      @media screen and (max-width: @screen-md) {
        font-size: 14px;
      }
    }

    .operation-wrapper {
      display: flex;
      justify-content: flex-end;

      .user-info {
        min-width: 80px;
        max-width: 200px;
        margin-right: 8px;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background: #025eb6;
        }
      }
    }
  }
}
</style>
