<template>
  <div class="about">
    <sublevel-nav />
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1">
        <template #title>
          <div class="about-title">任务平台 简介</div>
        </template>
        我们是一个综合信息与个人价值的交互平台。所有的信息必通过个人的IP地址オ能完成交互产生价值，基于IP地址的唯一性，平台要借助大批量的用户IPオ能实现批量化操作，所以平台的用户越多流量就越大，用户的收益就越高。我们的优势就是利用人工智能全面取代手工操作，具有可长时间，自动化及批量性高频操作特点，也有智能化匹配IP，精准的算法任务分解及键托管的技术优势。
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
  data() {
    return {
      activeNames: ['1']
    };
  }
};
</script>

<style lang="less">
.about {
  width: 100%;
  min-height: 100vh;
  // position: fixed;
  // background-color: #fff;
  .van-collapse {
    margin-top: 10px;
  }
  .van-cell__title {
    padding-left: 10px;
  }
  .about-title {
    color: #333333;
    font-size: 18px;
  }
  .van-collapse-item__content {
    color: #333333;
    padding: 20px 25px;
    font-size: 15px;
  }
  .about-title::before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: #0373f8;
    box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
    top: 0px;
    left: 15px;
    position: absolute;
  }
}
</style>
