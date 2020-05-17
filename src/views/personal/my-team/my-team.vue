<template>
  <div class="my-team">
    <sublevel-nav />
    <div class="list-options">
      <div class="option activited">邀请成功()</div>
      <div class="option">我的团队()</div>
    </div>
  </div>
</template>

<script>
import SublevelNav from '@/components/sublevel-header/sublevel-header';
export default {
  name: 'myTeam',
  components: {
    SublevelNav
  },
  created() {
    console.log('this.$route :', this.$route);
  }
};
</script>

<style lang="less">
.my-team {
  width: 100%;
  min-height: 100vh;
  // position: fixed;
  .list-options {
    display: flex;
    border-bottom: 1px solid #eaeaea;
    .option {
      width: 50%;
      padding: 15px 0;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
    .activited {
      color: #0373f8;
    }
  }
}
</style>
