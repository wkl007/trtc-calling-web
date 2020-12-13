<template>
  <div class="call-form">
    <a-form
      layout="horizontal"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item label="呼叫方" v-bind="validateInfos.username">
        <a-input
          v-bind="inputProps"
          placeholder="呼叫方userId"
          size="large"
          v-model:value="form.username"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
        <a-space
          v-if="trtcInfo.callStatus==='calling'&&trtcInfo.isInviter"
          size="large"
        >
          <a-button
            type="primary"
            disabled
            size="large"
          >
            呼叫中...
          </a-button>
          <a-button
            size="large"
            @click="handleCancel"
          >
            取消
          </a-button>
        </a-space>
        <a-button
          v-else
          type="primary"
          html-type="submit"
          size="large"
        >
          呼叫
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, inject } from 'vue'
import { INPUT_PROPS } from '@/utils/constants'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useForm } from '@ant-design-vue/use'
import { message } from 'ant-design-vue'

export default defineComponent({
  name: 'CallForm',
  setup (props, { emit }) {
    const router = useRouter()
    const store = useStore()
    const images = inject('images')
    const userInfo = computed(() => store.getters.userInfo)
    const trtcInfo = computed(() => store.getters.trtcInfo)
    const form = reactive({
      username: ''
    })
    const rules = reactive({
      username: [
        {
          required: true,
          message: '请输入呼叫方userId'
        }
      ]
    })
    const { validate, validateInfos } = useForm(form, rules)

    // 提交
    async function handleSubmit (): Promise<void> {
      try {
        await validate()
        if (form.username === userInfo.value.username) {
          message.error('不能输入当前登录userId')
          return
        }
        emit('submit', form)
      } catch (e) {}
    }

    // 取消
    function handleCancel () {
      emit('cancel')
    }

    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      inputProps: INPUT_PROPS,
      form,
      validateInfos,
      trtcInfo,
      images,
      handleSubmit,
      handleCancel
    }
  }
})
</script>

<style scoped lang="less">
.call-form {
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
}
</style>
