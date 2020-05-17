<template>
  <div class="service">
    <sublevel-nav />
    <div class="consultation">
      <div class="way" id="qq">
        <icon-svg size="40px" iconHref="iconqq01" />
        <p>QQ咨询</p>
      </div>
      <div class="way" id="wx">
        <icon-svg size="40px" iconHref="iconweixin3" />
        <p>微信咨询</p>
      </div>
    </div>
    <div class="service-time">
      <p>咨询时间:09:00 - 20:00</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.service {
  width: 100%;
  min-height: 100vh;
  // position: fixed;
  .consultation {
    display: flex;
    margin-bottom: 20px;
    .way {
      padding-top: 20px;
      font-size: 16px;
      width: 50%;
      position: relative;
      text-align: center;
      p {
        margin-top: 10px;
        color: #acacad;
      }
    }
  }
  .service-time {
    padding: 10px;
    text-align: center;
    font-size: 14px;
    background-color: #f8e8e9;
    color: #ff6262;
  }
  #qq::after {
    content: '';
    position: absolute;
    right: 0;
    top: 40%;
    width: 1px;
    background-color: #f2f3f5;
    height: 30px;
  }
}
</style>
