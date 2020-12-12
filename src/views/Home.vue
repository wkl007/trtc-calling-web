<template>
  <div class="home">
    <a-card
      :hoverable="true"
      :bordered="false"
      style="margin-bottom: 24px;"
      @click="goPage('/videoCall')"
    >
      <p class="text">视频通话</p>
    </a-card>
    <a-card
      :hoverable="true"
      :bordered="false"
      @click="goPage('/audioCall')"
    >
      <p class="text">语音通话</p>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup () {
    const router = useRouter()

    // 新页面
    function goPage (path: string): void {
      if (!path) return
      router.push({ path })
    }

    return {
      goPage
    }
  }
})
</script>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin: 100px auto 0;

  :deep(.ant-card) {
    color: #fff;
    background: linear-gradient(155deg, #0d2c5b 7%, #122755 93%);
    border-radius: 5px;

    .text {
      padding: 24px 0;
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>
