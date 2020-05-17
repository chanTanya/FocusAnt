<template>
  <div v-if="imgs.length" class="full-page-slide-wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <template v-for="(item, index) in imgs">
        <swiper-slide :key="index">
          <img :src="`${baseUrl}${item.thumb}`" @click="handleLink(item.url)" />
        </swiper-slide>
      </template>
        <!-- <template v-for="(item, index) in items">
        <swiper-slide :key="index">
          <img :src="`${item}`" @click.passive="handleLink(item)" />
        </swiper-slide>
      </template> -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'mySwiper',
  props: {
    imgs: {
      type: Array
    }
  },
  data () {
    return {
      items: [
        require('@/assets/images/img-collage.jpg'),
        require('@/assets/images/bg-home.jpg'),
        require('@/assets/images/bg-vipcenter.jpg')
      ],
      defaultIndex: 0,
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        autoplay: 3000,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10
        // 是否在点击知否停止自动滚动，默认true
        // autoplayDisableOnInteraction: false
        // 如果需要分页器
        // pagination: {
        //   // el: '.swiper-pagination',
        //   // bulletActiveClass: 'slide_dot_active',
        //   // bulletClass: 'slide_dot'
        // }
      }
    };
  },
  mounted () {
    // console.log('mounted swiper');
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    handleClick () { },
    handleLink (url) {
      console.log(url);
      // window.location.assign(url);
    }
  }
};
</script>
<style lang="less" scoped>
.full-page-slide-wrapper {
  width: 100%;
  height: 120px;
  background: white;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      display: flex;
      align-items: center;
    }
    .swiper-slide {
      width: calc(100% - 50px);
      border-radius: 5px;
    }
    .swiper-slide-prev {
      height: 88% !important;
      margin-top: 2%;
    }
    .swiper-slide-next {
      height: 88% !important;
      margin-top: 2%;
    }
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }
  /*
  .slide_dot {
    display: inline-block;
    margin: 5px;
    width: 3px;
    height: 3px;
    background-color: #f2f2f2;
    border-radius: 50%;
    opacity: 0.5;
  }
  .swiper-pagination {
    // bottom: 0;
  }
  .slide_dot_active {
    display: inline-block;
    width: 7px;
    height: 3px;
    border-radius: 5px;
    background: white;
    opacity: 1;
  }*/
}
</style>
