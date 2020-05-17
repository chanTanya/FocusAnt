<template>
  <div class="feed-back">
    <sublevel-nav />
    <div class="feed-back-form">
      <van-cell-group>
        <van-cell is-link @click="showPicker = true">
          <template #title>
            <span class="title">类型</span>
            <span class="content">{{ form.type ? form.type : '请选择' }}</span>
          </template>
        </van-cell>
        <van-field
          v-model="form.content"
          rows="3"
          maxlength="500"
          autosize
          type="textarea"
          placeholder="请输入您的反馈意见(必填，500字内)"
        />
        <van-field v-model="form.email" label="邮箱" />
        <van-field v-model="form.phone" type="tel" label="手机号" />
      </van-cell-group>
    </div>
    <div class="feed-back-hint">
      如您需要了解反馈结果，请留下邮箱或者手机号码，
      紧急问题可联系客服电话获得及时帮助。
    </div>
    <div class="submit">
      <van-button
        class="submit-btn"
        color="linear-gradient(#0373f8,#0373f8), linear-gradient(90deg, #0266ff 0%, #16acff 100%)"
        >提交</van-button
      >
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'feedBack',
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      form: {
        type: null,
        content: '',
        email: '',
        phone: ''
      },
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false
    };
  },
  methods: {
    onConfirm(value) {
      console.log('value :', value);
    }
  }
};
</script>

<style lang="less" scoped>
.feed-back {
  width: 100%;
  min-height: 100vh;
  // position: fixed;
  .van-cell-group {
    margin-top: 10px;
  }
  .title {
    font-weight: bold;
  }
  .content {
    margin-left: 15px;
    color: #c2c2c2;
  }
  .feed-back-hint {
    padding: 15px;
    font-size: 14px;
    color: #232323;
  }
  .submit {
    margin-top: 50px;
    text-align: center;
    .submit-btn {
      width: 90%;
      box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
      border-radius: 5px;
    }
  }
}
</style>
