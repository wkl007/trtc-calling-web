<template>
  <v-nav/>
  <div class="content-container">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VNav from '@/components/VNav.vue'

export default defineComponent({
  name: 'App',
  components: {
    VNav
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
