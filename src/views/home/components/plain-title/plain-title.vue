<template>
  <div class="plain-box">
    <div class="plain-box-nav">
    </div>
    <div class="plain-box-content">
      <slot name="content" />
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
  // margin-top: 10px;
  width: 100%;
  .plain-box-nav {
    display: flex;
    width: 90%;
    position: relative;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
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
    width: 90%;
    margin: 0 auto;
  }
}
</style>
