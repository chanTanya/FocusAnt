<template>
  <form-bg :formType="type">
    <template slot="form">
      <van-field v-model="form.phone" type="tel" placeholder="请输入手机号" />

      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="form.code" type="digit" placeholder="请输入验证码">
        <template #button>
          <van-button
            class="code-btn"
            size="small"
            color="#0374f7"
            type="primary"
            >获取验证码</van-button
          >
        </template>
      </van-field>
      <van-field
        v-model="form.newPsw"
        type="password"
        placeholder="请输入新密码"
      />
      <van-field
        v-model="form.rePsw"
        type="password"
        placeholder="请再次输入密码"
      />
      <van-button
        class="login-btn"
        color="linear-gradient(#0373f8,#0373f8),linear-gradient(#159efc,#159efc)"
        type="primary"
        size="large"
        >下一步</van-button
      >
    </template>
  </form-bg>
</template>

<script>
import FormBg from '@/components/login-form/login-form';
export default {
  name: 'retrieve',
  data() {
    return {
      form: {
        phone: '',
        code: '',
        newPsw: '',
        rePsw: ''
      },
      type: {
        title: '忘记密码',
        hint: '已有账号,马上登录',
        type: 1
      }
    };
  },
  components: {
    FormBg
  }
};
</script>

<style></style>
