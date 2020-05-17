<template>
  <div class="share-card">
    <div class="card-icon">
      <icon-svg size="30px" :iconHref="task.icon" />
    </div>
    <div class="task-content">
      <p class="task-name">{{ task.name }}</p>
      <p class="task-request">{{ task.content }}</p>
      <p class="task-award">
        每日 +5 或最高10元 <icon-svg size="14" iconHref="iconhongbao2" />
      </p>
    </div>
    <div class="get-btn">
      <van-button type="danger" size="small">去领取</van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="less" scoped>
.share-card {
  display: flex;
  width: 95%;
  padding: 15px;
  align-items: center;
  box-sizing: border-box;
  margin: 15px auto;
  background-color: #edf6fe;
  .card-icon {
    position: relative;
    width: 52px;
    border-radius: 50%;
    // text-align: center;
    height: 52px;
    margin-right: 15px;
    background-image: linear-gradient(#0373f8, #0373f8),
      linear-gradient(#f3dba4, #f3dba4);
    box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-bottom: 0;
    }
  }
  .task-content {
    width: 60%;
    .task-name {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 2px;
    }
    .task-request {
      font-size: 12px;
      color: #ccc;
      margin-bottom: 2px;
    }
    .task-award {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #ff0000;
      svg {
        margin-left: 5px;
      }
    }
  }
  .get-btn {
    // position: absolute;
    .van-button {
      height: 25px;
      line-height: 25px;
      background-color: #ff0000;
    }
  }
}
</style>
