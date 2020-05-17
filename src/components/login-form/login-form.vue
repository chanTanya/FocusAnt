<template>
  <div class="login">
    <div class="login-form-title">
      <p class="title">{{ formType.title }}</p>
      <p class="hint" @click="link">{{ formType.hint }}</p>
    </div>
    <div class="login-form">
      <div class="form">
        <slot name="form"></slot>
      </div>
    </div>
    <div class="white-box" v-if="formType.type === 0"></div>
    <div class="third-way" v-if="formType.type === 0">
      <!-- <van-divider>第三方登录</van-divider>
      <div class="weixin-login">
        <icon-svg iconHref="iconweixin" size="43px" />
        <p>微信登录</p>
      </div> -->
      <div class="agreement">
        <p>
          登录即同意<span class="agreement-span">《隐私政策》</span> 和
          <span class="agreement-span">《用户协议》</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        phone: '',
        password: '',
        code: ''
      },
      byPsw: true
    };
  },
  props: {
    formType: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    link() {
      const { path } = this.$route;
      const login = '/login';
      const register = '/register';
      path === login ? this.$router.push(register) : this.$router.push(login);
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  min-height: 100vh;
  .login-form-title {
    position: absolute;
    width: 92%;
    left: 50%;
    transform: translateX(-50%);
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
    height: 280px;
    background: url('../../assets/images/login-bg2.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    .form {
      width: 92%;
      // height: 280px;
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
    position: absolute;
    width: 100%;
    // padding: 0 10px;
    text-align: center;
    // top: 160px;
    bottom: 0;
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
