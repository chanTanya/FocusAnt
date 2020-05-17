<template>
  <div class="card-box">
    <div class="card-l">
      <div class="card-icon">
        <icon-svg size="24px" :iconHref="content.icon" />
      </div>
      <div class="card-content">
        <p class="content-name">{{ content.name }}</p>
        <p class="content-count">
          {{ content.count }}
        </p>
      </div>
    </div>
    <div class="card-r">
      <icon-svg size="22px" iconHref="iconicon-arrow-right-cir" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="less" scoped>
.card-box {
  width: 48%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: -2px 1px 14px 0px rgba(95, 95, 95, 0.1);
  .card-l {
    text-align: center;
    display: flex;
    .card-icon {
      margin-right: 5px;
    }
    .card-content {
      .content-name {
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 2px;
        font-size: 14px;
      }
      .content-count {
        font-size: 14px;
        text-align: left;
        color: #ff0000;
      }
    }
  }
}
</style>
