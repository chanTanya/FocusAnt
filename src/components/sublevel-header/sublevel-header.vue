<template>
  <transition>
    <div class="sublevel-header">
      <van-nav-bar :fixed="false" :border="false"></van-nav-bar>
      <van-nav-bar
        left-arrow
        :title="title"
        @click-left="back"
        @click-right="click"
        fixed
      >
        <template slot="right" v-if="right">
          <p>保存</p>
        </template>
      </van-nav-bar>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$route.meta.title;
    }
  },
  props: {
    right: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      this.$router.goBack();
    },
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  .van-icon {
    color: #000;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 2s;
}
.v-enter,
.v-leave-to {
  transform: translateY(-100%);
}
</style>
