<template>
  <div class="base-header">
    <van-nav-bar :fixed="false" :border="false"></van-nav-bar>
    <van-nav-bar :title="title" :fixed="true" :border="false">
      <template slot="right">
        <icon-svg iconHref="iconxiaoxi4" />
      </template>
      <template slot="left">
        <icon-svg iconHref="iconqiandao1" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="less" scoped>
// .base-header {
//   .van-nav-bar {
//     position: absolute;
//   }
// }
</style>
