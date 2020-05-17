<template>
  <div class="container">
    <div class="roll">
      <van-swipe  :autoplay="3000">
        <van-swipe-item v-for="(image, index) in adv" :key="index">
          <van-image width="100%" height="120px" fit="contain" lazy-load :src="`${baseUrl}${image.thumb}`" @click="handleSwipe(image.url)" />
        </van-swipe-item>
      </van-swipe>
      <div class="btn-nav">
        <div class="nav-box" v-for="(item, index) in btnnav" :key="index" @click.passive="nextPage(item.id)">
          <div class="icon-box" :style="{ 'background-image': `url(${baseUrl}${item.ico})`,'background-size':'cover' }">
            <!-- <icon-svg :iconHref="`${baseUrl}${item.ico}`" size="32px"></icon-svg> -->
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
      <!-- <div class="btn-nav">
        <div class="nav-box" v-for="(item, index) in btnnav" :key="index" @click.passive="nextPage(item.to)">
          <div class="icon-box" :style="{ 'background-image': `${item.color}` }">
            <icon-svg :iconHref="item.iconHref" size="32px"></icon-svg>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div> -->
      <van-notice-bar class="notice-bar" :text="notice" :scrollable="true" color="#686868" background="#f7fbff"
        :left-icon="require('@/assets/images/icon-fire.png')">
      </van-notice-bar>
      <div class="center"></div>
      <div class="task">
        <van-cell :border="false" class="van-cell-head">
          <template #title>
            <span class="title">任务大厅</span>
            <van-tag class="tag">开通会员，自动完成</van-tag>
          </template>
        </van-cell>
        <div class="taskBox">
          <div v-for="(item, index) in tasklist" :key="index" class="contentBox" @click="taskDetail('TaskDetail',item.id)">
            <div class="aBox">
              <van-cell :border="false" class="box-cell">
                <template #title>
                  <span class="box-title">{{ item.title }}</span>
                  <!-- 会员自助 -->
                  <!-- <van-tag type="danger" class="box-tag">{{
                    item.tag
                  }}</van-tag> -->
                </template>
              </van-cell>
              <p class="profit">+{{ item.price }}</p>
              <div class="btn">
                <!-- <div>{{ item.btn1 }}</div>
                <div>{{ item.btn2 }}</div> -->
                <icon-svg v-if="item.is_shouji==='1'" iconHref="iconiphone1" size="18px" />
                <icon-svg v-else iconHref="iconiphone" size="18px" />
                <icon-svg v-if="item.is_weixin==='1'" iconHref="iconweixin5" size="18px" />
                <icon-svg v-else iconHref="iconweixin4" size="18px" />
                <icon-svg v-if="item.is_shiming==='1'" iconHref="iconpre_icon_shimingrenzheng" size="18px" />
                <icon-svg v-else iconHref="iconrenwuzhongxin-shimingrenzheng" size="18px" />
                <icon-svg v-if="item.is_idcard==='1'" iconHref="iconshimingrenzheng1" size="18px" />
                <icon-svg v-else iconHref="iconshimingrenzheng" size="18px" />
              </div>
              <p class="people">
                <icon-svg iconHref="iconredu" size="18px" />
                领取热度：<span>{{ item.apply_num }}</span>/<span>{{item.max_num}}</span> </p>
            </div>
          </div>
        </div>
      </div>
      <div class="collage">
        <van-cell :border="false">
          <template #title>
            <span class="title">营销学院</span>
          </template>
        </van-cell>
        <!-- <van-cell value="查看全部" is-link to="/home/collage" :border="false">
          <template #title>
            <span class="title">营销学院</span>
          </template>
        </van-cell> -->
        <!-- 开启延迟渲染（首次切换到标签时才触发内容渲染） -->
        <!-- @rendered 事件， 标签内容首次渲染时触发（仅在开启延迟渲染后触发） -->
        <div class="tabList">
          <van-tabs v-model="activeName" @click="handleTab" :color="'#0373f8'" :title-active-color="'#0373f8'" animated swipeable>
            <van-tab v-for="(item, index) in tab" :key="index" :title="item[0].name">
                <div role="list" v-for="(li, i) in item" :key="i" class="li">
                  <div class="a-li" @click.passive="collageDetail('Collage',li.id)">
                    <div class="text">
                      <p class="text-title">{{ li.title }}</p>
                      <p class="text-name">{{ li.name }}</p>
                    </div>
                    <div class="img">
                      <van-image class="a-img" lazy-load :src="`${baseUrl}${li.thumb}`" />
                    </div>
                  </div>
                </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  created () {
    const vm = this;
    vm.onLoad();
  },
  mounted () {
    // console.log(this.$route.meta);
  },
  data () {
    return {
      // 轮播图
      adv: [],
      btnnav: [],
      // 按钮导航
      // btnnav: [
      //   {
      //     to: 'Task',
      //     iconHref: 'iconrenwu',
      //     name: '任务大厅',
      //     color: 'linear-gradient(-29deg, #fd2727 0%,#fc5f37 38%,#fb9746 100%)'
      //   },
      //   {
      //     to: 'Earning',
      //     iconHref: 'iconshouyi',
      //     name: '会员收益',
      //     color: 'linear-gradient(-43deg, #ff9000 0%, #fec18a 100%)'
      //   },
      //   {
      //     to: 'Integral',
      //     iconHref: 'iconjifen',
      //     name: '积分',
      //     color: 'linear-gradient(-39deg, #0d6beb 0%, #80c5fa 70%)'
      //   },
      //   {
      //     to: 'Collage',
      //     iconHref: 'iconxuexiao_xuesheng',
      //     name: '营销学院',
      //     color: 'linear-gradient(-28deg, #02bec5 0%, #84fffd 100%)'
      //   },
      //   {
      //     to: 'Task',
      //     iconHref: 'iconB',
      //     name: '会员中心',
      //     color: 'linear-gradient(-21deg, #f87f14 0%, #f9da7b 100%)'
      //   },
      //   {
      //     to: 'FreshMan',
      //     iconHref: 'iconxinshouyindao',
      //     name: '新手上路',
      //     color: 'linear-gradient(-29deg, #fb5c3c 0%, #ffb33c 70%)'
      //   },
      //   {
      //     to: 'Task',
      //     iconHref: 'iconqiandao2',
      //     name: '每日签到',
      //     color: 'linear-gradient(-22deg, #02b3e6 0%, #73f3fb 100%)'
      //   },
      //   {
      //     to: 'Task',
      //     iconHref: 'iconfabuxuqiu',
      //     name: '发布需求',
      //     color: 'linear-gradient(-18deg, #9b0ae6 0%, #f19efd 100%)'
      //   },
      //   {
      //     to: 'Task',
      //     iconHref: 'iconyaoqinghaoyou',
      //     name: '邀请好友',
      //     color: 'linear-gradient(-29deg, #fd2727 0%, #fc5f37 38%, #fb9746 70%)'
      //   },
      //   {
      //     to: 'Task',
      //     iconHref: 'icongengduo',
      //     name: '更多',
      //     color: 'linear-gradient(-39deg, #0d6beb 0%, #80c5fa 70%)'
      //   }
      // ],
      // 通知
      notice: '',
      // 任务大厅
      tasklist: [
        // {
        //   title: '趣头条',
        //   tag: '会员自助',
        //   profit: '3.72',
        //   btn1: '简单',
        //   btn2: '高级',
        //   people: '89002222'
        // },
        // {
        //   title: '中兴看点',
        //   tag: '会员自助',
        //   profit: '3.72',
        //   btn1: '简单',
        //   btn2: '高级',
        //   people: '89002222'
        // },
        // {
        //   title: '中兴看点',
        //   tag: '会员自助',
        //   profit: '3.72',
        //   btn1: '简单',
        //   btn2: '高级',
        //   people: '89002222'
        // },
        // {
        //   title: '中兴看点',
        //   tag: '会员自助',
        //   profit: '3.72',
        //   btn1: '简单',
        //   btn2: '高级',
        //   people: '89002222'
        // }
      ],
      // 营销学院
      list: [1, 2],
      loading: false,
      finished: true,
      // 通过数字匹配，0就是第一个tab.通过标签名匹配需要设每个vant-tab的name属性
      activeName: 0,
      tab: {
        // list0: [
        //   {
        //     title: '如何实施营销方案，大咖分享朋友圈营销技巧',
        //     name: '营销指南',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '如何实施营销方案，大咖分享朋友圈营销技巧',
        //     name: '营销指南',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '如何实施营销方案，大咖分享朋友圈营销技巧',
        //     name: '营销指南',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   }
        // ],
        // list1: [
        //   {
        //     title: '',
        //     name: '团队管理',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '',
        //     name: '团队管理',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '',
        //     name: '团队管理',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   }
        // ],
        // list2: [
        //   {
        //     title: '',
        //     name: '营销头条',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '',
        //     name: '营销头条',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '',
        //     name: '营销头条',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   }
        // ],
        // list3: [
        //   {
        //     title: '',
        //     name: '代理招聘',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '',
        //     name: '代理招聘',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '',
        //     name: '代理招聘',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   }
        // ],
        // list4: [
        //   {
        //     title: '',
        //     name: '营销技巧',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '',
        //     name: '营销技巧',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   },
        //   {
        //     title: '',
        //     name: '营销技巧',
        //     picture: require('@/assets/images/img-collage.jpg')
        //   }
        // ]
      }
    };
  },
  methods: {
    nextPage (id) {
      sessionStorage.setItem('taskType', id);
      this.$router.push({ name: 'Task' });
    },
    taskDetail (Name, id) {
      sessionStorage.setItem('taskId', id);
      this.$router.push({ name: Name, params: { id: id } });
    },
    collageDetail (Name, id) {
      // sessionStorage.setItem('collageId', id);
      this.$router.push({ name: Name, params: { id: id } });
    },
    nextPageWithParams (Name, Params) {
      this.$router.push({ name: Name, params: { userId: Params } });
    },
    handleTab (tabs, title) {
      console.log(name, title);
    },
    async onLoad () {
      const res = await this.$api.home();
      const [data, vm] = [res.data.info, this];
      console.log(data);
      [vm.adv, vm.notice, vm.btnnav, vm.tasklist, vm.tab] = [data.adv, vm.arrToStr(data.new), data.cate_list, data.task_list, vm.tabsData(data.newcate, data.newS)];
    },
    arrToStr (arr) {
      // 拼接滚动新闻
      let str = '';
      arr.map(item => {
        // 使用\xa0-,它是一个NO-BREAK SPACE char。UTF-8编码表和Unicode字符
        str = `${str}${item.content}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`;
      });
      return str;
    },
    tabsData (tabsArr, contentArr) {
      const data = {};
      tabsArr.map((item, i) => {
        data[`list${i}`] = [];
        contentArr.map(it => {
          if (item.id === it.cid) {
            it.name = item.name;
            data[`list${i}`].push(it);
          }
        });
      });
      // console.log(data);
      return data;
    }
  }
};
</script>

<style scoped lang="less">
@bgcolor: #f7f7f8;
@fontsize: 16px;
@color: red;
// mixin
.centerBox() {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*
@height：盒子的高度
@width:盒子的宽度
@count：一行显示多少个盒子
调用：
.taskBox {
        .flexWrapBox(180px,180px,2);
        .contentBox{
          background-color: #0c0c0c;
        }
      }
*/
.flexWrapBox(@height,@width,@count) {
  min-height: @height;
  max-width: (@count* @width);
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  // background-color: #0373f8;
  .contentBox {
    height: @height;
    width: @width;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 标题头图标
.iconHead() {
  content: ' ';
  display: block;
  width: 4px;
  height: 24px;
  background-image: linear-gradient(#0373f8, #0373f8),
    linear-gradient(#3889ff, #3889ff);
  background-blend-mode: normal, normal;
  box-shadow: 0px 2px 6px 0px rgba(4, 116, 248, 0.3);
  margin-right: 6px;
}
// 标题文字
.van-cell__title() {
  flex: 2 !important;
  .title {
    color: #0c0c0c !important;
    font-weight: bold;
    font-size: 15px !important;
  }
}

.container {
  // 便于vant的swipe组件定位，否则在切换页面时该组件出现定位bug
  position: relative;
  .roll {
    background-color: white;
    font-size: @fontsize+2px;
    padding-bottom: 44px;
    .btn-nav {
      min-height: 80px;
      max-width: 350px;
      display: flex;
      flex-wrap: wrap;
      margin: 16px auto;
      .nav-box {
        display: flex;
        height: 80px;
        width: 70px;
        font-size: 12px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .icon-box {
          width: 48px;
          height: 48px;
          .centerBox();
          -webkit-clip-path: polygon(
            50% 0%,
            85% 13%,
            100% 50%,
            85% 87%,
            50% 100%,
            13% 87%,
            0 50%,
            15% 13%
          );
          clip-path: polygon(
            50% 0%,
            85% 13%,
            100% 50%,
            85% 87%,
            50% 100%,
            13% 87%,
            0 50%,
            15% 13%
          );
        }
        p {
          text-align: center;
        }
      }
    }
    .notice-bar {
      width: 84% !important;
      margin: 0 auto !important;
      height: 32px !important;
      border-radius: 16px;
      padding-right: 8px !important;
      margin-bottom: 16px !important;
      &:after {
        content: '';
        background-image: url('../../assets/images/icon-go.png');
        width: 12px;
        height: 12px;
        background-size: cover;
        margin-left: 12px;
      }
    }
    .center {
      height: 0.43rem;
      background-image: url('../../assets/images/bg-center.jpg');
      background-size: cover;
    }
    .task {
      padding-bottom: 12px;
      .van-cell-head {
        &::before {
          .iconHead();
        }
        .van-cell__title {
          .van-cell__title();
          .tag {
            background-image: linear-gradient(-45deg, #ff8c4c 0%, #ffc558 100%),
              linear-gradient(#ff0000, #ff0000) !important;
            margin-left: 12px !important;
          }
        }
      }
      .taskBox {
        .flexWrapBox(180px, 180px, 2);
        .aBox {
          min-height: 77%;
          width: 77%;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden; //避免遮住圆角
          padding: 12px 12px;
          .box-cell {
            padding: 0 !important;
            .van-cell__title {
              display: flex;
              align-items: center;
              .box-title {
                color: #323232 !important;
                font-weight: 550;
                display: block;
                min-height: 48px;
                font-size: 15px !important;
                padding-top: 2px;
              }
              .box-tag {
                height: 12px !important;
                margin-left: 8px !important;
                border-radius: 4px !important;
                font-size: 8px !important;
              }
            }
          }
          .profit {
            height: 40%;
            font-size: 30px;
            font-weight: 550;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ff0000;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .btn {
            padding: 6px 0px 6px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: SimHei;
            font-size: 10px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            // color: #ff0000;
            width: 80px;
            div {
              width: 33px;
              height: 13px;
              border-radius: 6px;
              border: solid 1px #ff0000;
              .centerBox();
            }
          }
          .people {
            padding-top: 4px;
            height: 28%;
            font-family: SimHei;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            // color: #838383;
            color: red;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        }
      }
    }
    .collage {
      padding-top: 12px;
      background-color: @bgcolor;
      .van-cell {
        &::before {
          .iconHead();
        }
        .van-cell__title {
          .van-cell__title();
        }
      }
      .li {
        height: 120px;
        background-color: #fff;
        padding-bottom: 8px;
        .centerBox();
        .a-li {
          width: 90%;
          height: 80px;
          display: flex;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid #f2f2f2;
          .text {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            .text-title {
              width: 90%;
              font-family: MicrosoftYaHei;
              font-size: 16px;
              letter-spacing: 0px;
              color: #333333;
            }
            .text-name {
              font-family: MicrosoftYaHei;
              font-size: 12px;
              letter-spacing: 0px;
              color: #2269d4;
            }
          }
          .img {
            .centerBox();
            width: 120px;
            height: 80px;
            .a-img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
