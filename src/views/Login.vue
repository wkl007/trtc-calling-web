<template>
  <div class="login">
    <div class="form-wrapper">
      <a-form
        layout="horizontal"
        :rules="rules"
        :wrapper-col="wrapperCol"
        :model="form"
        ref="loginForm"
        @submit="handleSubmit"
      >
        <a-form-item v-bind="validateInfos.username">
          <a-input
            v-bind="inputProps"
            placeholder="请输入userId"
            size="large"
            v-model:value="form.username"
          />
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
import { defineComponent, reactive, toRaw } from 'vue'
import { useStore } from 'vuex'
import { useForm } from '@ant-design-vue/use'
import { INPUT_PROPS } from '@/utils/constants'

export default defineComponent({
  name: 'Login',
  setup () {
    const inputProps = reactive(INPUT_PROPS)
    const form = reactive({
      username: ''
    })
    const rules = reactive({
      username: [
        {
          required: true,
          message: '请输入userId'
        }
      ]
    })
    const {
      resetFields,
      validate,
      validateInfos
    } = useForm(form, rules)

    async function handleSubmit (e: any) {
      try {
        await validate()
        console.log(toRaw(form))
      } catch (err) {}
    }

    /* function setLoginStatus (loginStatus: number) {
      store.dispatch('setLoginStatus', loginStatus)
    } */

    return {
      wrapperCol: { span: 24 },
      inputProps,
      rules: {
        username: [
          {
            required: true,
            message: '请输入userId'
          }
        ]
      },
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
  margin: 160px auto 0;
}
</style>
