<template>
  <footer>
    <!-- 开启底部安全区适配 -->
    <!-- 解决底部fixed浮动遮住内容 -->
    <van-tabbar route :fixed="false" :border="false" safe-area-inset-bottom>
      <!-- fixed布局会浮动，使用一个fixed：false空盒子来填充footer,且高度变化和实际底部按钮一致 -->
    </van-tabbar>
    <van-tabbar route :fixed="true" :border="false" safe-area-inset-bottom >
      <van-tabbar-item replace to="/home" icon="wap-home">
        主页
      </van-tabbar-item>
      <van-tabbar-item replace to="/task" icon="browsing-history">
        任务大厅
      </van-tabbar-item>
      <!-- 为center-btn占位 ,设置按钮文本和字体颜色，只能使用行内样式才能覆盖本身的选中文本变色样式-->
      <!-- <van-tabbar-item icon="browsing-history" class="fake-btn" style="color:#1989fa">
        发布
      </van-tabbar-item> -->
      <van-tabbar-item replace to="/earning" icon="gold-coin">
        收益中心
      </van-tabbar-item>
      <van-tabbar-item replace to="/personal" icon="smile">
        个人中心
      </van-tabbar-item>
      <!-- center-btn -->
      <!-- <div class="center-btn">
        <van-button icon="plus" color="linear-gradient(to right, #4bb0ff, #6149f6)"></van-button>
      </div> -->
      <!-- absolute -->
      <transition name="van-slide-left">
        <div class="footer-btn" v-if="showBtn">
          <van-button block round color="linear-gradient(to right, #4bb0ff, #6149f6)">启动系统 自动完成
          </van-button>
        </div>
      </transition>
    </van-tabbar>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooterNav',
  props: ['showBtn'],
  methods: {
  }
};
</script>
<style lang="less" scoped>
.footer-btn {
  position: absolute !important;
  left: 0px;
  right: 0px;
  // top: -73px;
  top:-42px;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
}
.center-btn {
  position: absolute;
  left: 50%;
  /* top: -0%; */
  transform: translate(-50%, -50%);
  // transform百分比单位是 x--->widtn%,y-->height%
  /deep/ .van-button {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
}
</style>
