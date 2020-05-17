<template>
  <div id="app">
    <header-nav v-if="!hideHeader" :title="title" />
    <transition :name="transitionName">
      <keep-alive exclude="TaskDetail,Task,Collage">
        <router-view />
      </keep-alive>
    </transition>
    <footer-nav :showBtn="footerBtn" v-if="!hideFooter" />
  </div>
</template>

<script>
import FooterNav from '@/components/BaseFooterNav';
import HeaderNav from '@/components/base-header/base-header';
export default {
  name: 'App',
  created() {
  },
  data () {
    return {
      transitionName: ''
    };
  },
  computed: {
    title () {
      return this.$route.meta.title;
    },
    hideHeader () {
      return this.$route.meta.hideHeader;
    },
    hideFooter () {
      return this.$route.meta.hideFooter;
    },
    footerBtn () {
      return this.$route.meta.footerBtn;
    }
  },
  watch: {
    $route (to, from) {
      const { isBack } = this.$router;
      this.transitionName = isBack ? 'turn-off' : 'turn-on';
      this.$router.isBack = false;
    }
  },
  components: {
    FooterNav,
    HeaderNav
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f7f7f8;
  height: 100%;
}
.red-span {
  color: #ff0000;
}
.van-nav-bar__title {
  font-size: 16px !important;
  font-weight: 500 !important;
}
.van-button {
  .van-button__text {
    display: flex;
    align-items: center;
    justify-content: center;
    // color: #0373f8;
    svg {
      margin-bottom: 0;
      margin-right: 5px;
    }
  }
}
.turn-on-enter {
  position: fixed;
  transform: translate3d(100%, 0, 0);
}
.turn-on-leave-to {
  position: fixed;
  transform: translate3d(-100%, 0, 0);
}
.turn-on-enter-active,
.turn-on-leave-active {
  transition: all 0.6s ease;
}
.turn-off-enter {
  // position: fixed;
  transform: translate3d(-100%, 0, 0);
}
.turn-off-leave-to {
  position: fixed;
  transform: translate3d(100%, 0, 0);
}
.turn-off-enter-active,
.turn-off-leave-active {
  transition: all 0.6s ease;
}
.turn-off-leave-active {
  z-index: 999;
}
</style>
