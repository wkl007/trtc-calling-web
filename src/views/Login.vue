<template>
  <div class="login">
    <div class="form-wrapper">
      <a-form
        layout="horizontal"
        :wrapper-col="wrapperCol"
        :model="form"
        @submit="handleSubmit"
      >
        <a-form-item v-bind="validateInfos.sdkAppId">
          <a-input
            v-bind="inputProps"
            placeholder="SDKAppID"
            size="large"
            v-model:value="form.sdkAppId"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.secretKey">
          <a-input
            v-bind="inputProps"
            placeholder="加密秘钥"
            size="large"
            v-model:value="form.secretKey"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.username">
          <a-input
            v-bind="inputProps"
            placeholder="请输入userId"
            size="large"
            v-model:value="form.username"
          />
        </a-form-item>
        <a-form-item>
          <a-checkbox v-model:checked="form.cache">
            保存SDKAppID与加密秘钥
          </a-checkbox>
        </a-form-item>
        <a-button
          type="primary"
          block
          size="large"
          html-type="submit"
        >
          登录
        </a-button>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useForm } from '@ant-design-vue/use'
import { INPUT_PROPS, SDK_INFO } from '@/utils/constants'
import { saveStorage } from '@/utils/cache'
import { useTRTC } from '@/hooks'

let trtcCalling: any

export default defineComponent({
  name: 'Login',
  setup () {
    const { initTRTC, handleLogin, initListener } = useTRTC()
    const router = useRouter()
    const store = useStore()
    const form = reactive({
      sdkAppId: '',
      secretKey: '',
      username: '',
      cache: true
    })
    const rules = reactive({
      sdkAppId: [
        {
          required: true,
          message: '请输入腾讯云SDKAppId'
        }
      ],
      secretKey: [
        {
          required: true,
          message: '请输入腾讯云加密密钥'
        }
      ],
      username: [
        {
          required: true,
          message: '请输入userId'
        }
      ]
    })
    const { validate, validateInfos } = useForm(form, rules)

    // 获取缓存信息
    function getCacheSdk (): void {
      const { sdkInfo: { sdkAppId, secretKey } } = store.getters
      sdkAppId && (form.sdkAppId = sdkAppId)
      secretKey && (form.secretKey = secretKey)
    }

    // 提交
    async function handleSubmit (): Promise<void> {
      try {
        await validate()
        const { cache, sdkAppId, secretKey, username } = form
        if (cache) saveStorage(SDK_INFO, { sdkAppId, secretKey })
        // console.log(toRaw(form))
        await store.dispatch('setUserInfo', { username })
        await store.dispatch('setSdkInfo', { sdkAppId, secretKey })
        const trtcCalling = initTRTC()
        await store.dispatch('setTrtcCalling', trtcCalling)
        await store.dispatch('setLoginStatus', 1)
        await router.push({ path: '/' })
        handleLogin(trtcCalling)
      } catch (err) {
        console.log(err)
      }
    }

    onBeforeMount(() => {
      getCacheSdk()
    })

    return {
      wrapperCol: { span: 24 },
      inputProps: INPUT_PROPS,
      form,
      validateInfos,
      handleSubmit
    }
  }
})
</script>

<style scoped lang="less">
.form-wrapper {
  width: 90%;
  max-width: 400px;
  margin: 100px auto 0;
}
</style>
