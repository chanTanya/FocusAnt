<template>
  <form-bg :formType="type">
    <template slot="form">
      <van-form validate-first>
        <van-field
          v-model="form.username"
          type="tel"
          placeholder="请输入手机号"
          :rules="[{ pattern, message: '请输入正确的手机号码' }]"
        />

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
          v-model="form.inviteCode"
          type="digit"
          placeholder="请输入邀请码"
        />
        <van-field
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        />
        <van-field
          v-model="form.repassword"
          type="password"
          placeholder="请再次输入密码"
        />
        <van-button
          class="login-btn"
          color="linear-gradient(#0373f8,#0373f8),linear-gradient(#159efc,#159efc)"
          type="primary"
          size="large"
          @click="register"
          >注册并登录</van-button
        >
      </van-form>
    </template>
  </form-bg>
</template>

<script>
import FormBg from '@/components/login-form/login-form';
export default {
  name: 'register',
  components: {
    FormBg
  },
  data() {
    return {
      form: {
        username: '',
        code: '',
        inviteCode: '',
        password: '',
        repassword: ''
      },
      type: {
        title: '注册',
        hint: '已有账号, 马上登录',
        type: 2
      },
      code: '',
      pattern: /^1[3|4|5|7|8]\d{9}$/
    };
  },
  methods: {
    register: async function() {
      const {
        form: { username, code, inviteCode, password, repassword }
      } = this;
      const res = await this.$api.register(
        this.$qs.stringify({
          username,
          password,
          repassword,
          code,
          invite_code: inviteCode
        })
      );
      console.log('res :>> ', res);
      const {
        data: { info, status }
      } = res;
      if (status === 1) {
        this.$toast(info);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  // position: relative;
  width: 100%;
  min-height: 100vh;
  .login-form-title {
    position: absolute;
    width: 92%;
    top: 60px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
    // padding: 15px 10px;
    .title {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .hint {
      font-size: 14px;
    }
  }
  .login-form {
    width: 100%;
    background: url('../../assets/images/login-bg2.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    .form {
      width: 92%;
      height: 280px;
      border-radius: 8px;
      box-shadow: 1px 0px 22px rgba(86, 86, 86, 0.15);
      margin: 0 auto;
      box-sizing: border-box;
      background: #fff;
      padding: 15px 10px;
      position: relative;
      top: 150px;
      .van-cell {
        // padding: 0 5px;j
        margin-bottom: 24px;
        // border-bottom: 1px solid #eaeaea;
      }
      .van-cell::after {
        position: absolute;
        box-sizing: border-box;
        content: ' ';
        pointer-events: none;
        right: 0;
        bottom: 0;
        left: 0.426667rem;
        border-bottom: 0.026667rem solid #ebedf0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
      .by-security-code {
        display: inline-block;
        color: rgba(0, 0, 0, 0.85);
        margin-bottom: 15px;
        width: 100%;
        text-align: center;
      }
      .code-btn {
        font-size: 10px;
        height: 0.7rem;
        line-height: 0.7rem;
        // height: 20px;
      }
      .login-btn {
        // background-image: linear-gradient(#0373f8, #0373f8),
        //   linear-gradient(#159efc, #159efc);
        box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
        border-radius: 20px;
      }
      .account-operate {
        width: 40%;
        margin: 15px auto;
        color: #999999;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .white-box {
    height: 200px;
  }
  .third-way {
    // position: absolute;
    width: 100%;
    // padding: 0 10px;
    text-align: center;
    // top: 160px;
    // bottom: 0;
    .weixin-login {
      color: #999;
      font-size: 14px;
      p {
        margin-top: 5px;
      }
    }
    .agreement {
      margin: 20px 0;
      color: #999;
      .agreement-span {
        color: #0373f8;
      }
    }
  }
  // .opacity-enter,
  // .opactiy-leaver-to {
  //   // transition: opacity 0.8s;
  //   opacity: 0;
  //   transition: opacity 0.4s;
  // }
  // .opacity-enter-active,
  // .opacity-leave-active {
  //   // opacity: 1;
  //   // opacity: 0;
  //   transition: opacity 0.8s;
  //   // transition: opacity 0.5s;
  // }
}
</style>
