<template>
  <div class="plain-box">
    <div class="plain-box-nav">
      <div class="box-name">{{ name }}</div>
      <div class="all-btn">查看全部<van-icon name="arrow" /></div>
    </div>
    <div class="plain-box-content">
      <slot name="content" />
    </div>
    <div class="more">
      <slot name="more" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.plain-box {
  margin-top: 10px;
  width: 100%;
  background-color: #fff;
  height: 100%;
  .plain-box-nav {
    display: flex;
    width: 95%;
    position: relative;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 10px;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    .box-name {
      font-size: 16px;
      margin-left: 5px;
      font-weight: bold;
    }
    .box-name::before {
      content: '';
      position: absolute;
      top: 12px;
      left: 0;
      width: 4px;
      height: 20px;
      background-image: linear-gradient(#0373f8, #0373f8),
        linear-gradient(#3889ff, #3889ff);
      box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
    }
    .all-btn {
      display: flex;
      align-items: center;
      i {
        margin-left: 5px;
      }
      font-size: 12px;
      color: #b2b2b2;
    }
  }
  .plain-box-content {
    width: 95%;
    margin: 10px auto;
  }
  .more {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #ff0000;
    font-weight: bold;
    margin: 15px 0;
    justify-content: center;
  }
}
</style>
