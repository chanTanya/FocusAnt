<template>
  <div class="container">
    <div class="roll">
      <van-swipe class="swipe" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image height="120px" fit="contain" lazy-load :src="`${baseUrl}${image.thumb}`" @click="handleSwipe(image.url)" />
        </van-swipe-item>
      </van-swipe>
      <!-- <div class="btn-nav">
        <div class="nav-box" v-for="(item, index) in btnnav" :key="index">
          <div class="icon-box" :style="{'background-image':`${item.color}`}">
            <icon-svg :iconHref="item.iconHref" size="32px"></icon-svg>
          </div>
          <p class="name">{{item.name}}</p>
        </div>
      </div> -->
      <div class="btn-nav">
        <div class="nav-box" v-for="(item, index) in btnnav" :key="index" @click.passive="changeTaskType(item.id)">
          <div class="icon-box" :style="{ 'background-image': `url(${baseUrl}${item.ico})`,'background-size':'cover' }">
          </div>
          <p class="name">{{item.name}}</p>
        </div>
      </div>
      <van-notice-bar class="notice-bar" :text="notice" :scrollable="true" color="#686868" background="#f7fbff"
        :left-icon="require('@/assets/images/icon-fire.png')">
      </van-notice-bar>
      <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="onLoad">
        <ol class="list">
          <li v-for="item in tasklist" :key="item.id">
            <div class="money">
              <p class="p1">奖励(元)</p>
              <div class="center">
                <div class="div1"></div>
                <div class="div2">-----------------------------------</div>
                <div class="div3"></div>
              </div>
              <p class="p2">
                <span>
                  <span class="span1">￥</span><span class="span2">{{item.price}}</span>
                </span>
              </p>
              <div class="bottom">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="content">
              <div class="div1">
                <!-- <van-tag color="#f2826a" class="span1">标签</van-tag> -->
                <span class="span2">{{item.title}}</span>
              </div>
              <div class="div2">
                <icon-svg iconHref="iconredu" size="18px" />
                <span>领取热度：</span>
                &nbsp; &nbsp;
                <span>{{item.apply_num}}/{{item.max_num}}</span>
              </div>
              <div class="div3">
                <icon-svg v-if="item.is_shouji==='1'" iconHref="iconiphone1" size="18px" />
                <icon-svg v-else iconHref="iconiphone" size="18px" />
                <icon-svg v-if="item.is_weixin==='1'" iconHref="iconweixin5" size="18px" />
                <icon-svg v-else iconHref="iconweixin4" size="18px" />
                <icon-svg v-if="item.is_shiming==='1'" iconHref="iconpre_icon_shimingrenzheng" size="18px" />
                <icon-svg v-else iconHref="iconrenwuzhongxin-shimingrenzheng" size="18px" />
                <icon-svg v-if="item.is_idcard==='1'" iconHref="iconshimingrenzheng1" size="18px" />
                <icon-svg v-else iconHref="iconshimingrenzheng" size="18px" />
              </div>
            </div>
            <div class="btn" @click="nextPage('TaskDetail',item.id)">
              <van-button round color="linear-gradient(to right, #4bb0ff, #6149f6)" block size="mini" class="a-btn">详情</van-button>
            </div>
          </li>
        </ol>
      </van-list>

    </div>
    <!-- <transition name="van-slide-left">
      <div class="fix-btn" v-show="showBtn">
        <van-button type="danger" block round color="linear-gradient(to right, #4bb0ff, #6149f6)">启动系统 自动完成</van-button>
      </div>
    </transition> -->
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Task',
  components: {
  },
  created () {
    const vm = this;
    vm.onLoad();
    console.log(this.taskType);
  },
  mounted () {
  },
  beforeDestroy () {
    sessionStorage.removeItem('taskType');
  },
  data () {
    return {
      // 任务类型id
      taskType: sessionStorage.getItem('taskType'),
      // 任务大厅
      tasklist: [
        // { title: '趣头条', tag: '会员自助', profit: '3.72', btn1: '简单', btn2: '高级', people: '89002222' },
        // { title: '中兴看点', tag: '会员自助', profit: '3.72', btn1: '简单', btn2: '高级', people: '89002222' },
        // { title: '中兴看点', tag: '会员自助', profit: '3.72', btn1: '简单', btn2: '高级', people: '89002222' },
        // { title: '中兴看点', tag: '会员自助', profit: '3.72', btn1: '简单', btn2: '高级', people: '89002222' }
      ],
      pageIndex: -1,
      // 无限滚动
      loading: false,
      finished: false,
      finishedText: '',
      // type：0,nomore
      resType: 1,
      resListArr: [],
      // 轮播图
      images: [
        // require('@/assets/images/bg-home.jpg'),
        // require('@/assets/images/bg-home.jpg'),
        // require('@/assets/images/bg-home.jpg')
      ],
      // 按钮导航
      btnnav: [
        // { iconHref: 'iconwancheng', name: '注册任务', color: 'linear-gradient(0deg, #9678fa 0%, #ccc4db 100%), linear-gradient(#f3403a, #f3403a)' },
        // { iconHref: 'icondownload', name: '下载任务', color: 'linear-gradient(-43deg, #fd3650 0%, #fec18a 100%)' },
        // { iconHref: 'iconguanzhu', name: '关注任务', color: 'linear-gradient(-39deg, #0d6beb 0%, #80c5fa 70%)' },
        // { iconHref: 'iconzu', name: '投票任务', color: 'linear-gradient(-28deg, #02bec5 0%, #84fffd 100%)' },
        // { iconHref: 'iconzhuanfa', name: '转发任务', color: 'linear-gradient(-80deg, #f97 0%, #f8aa7b 70%)' },
        // { iconHref: 'iconpinglun', name: '评论任务', color: 'linear-gradient(-29deg, #fb5c3c 0%, #ffb33c 70%)' },
        // { iconHref: 'icondianshang', name: '电商任务', color: 'linear-gradient(-22deg, #02b3e6 0%, #73f3fb 100%)' },
        // { iconHref: 'iconicon_tiaochawenjuan', name: '调查任务', color: 'linear-gradient(-18deg, #43C6AC 0%, #F8FFAE 100%)' },
        // { iconHref: 'icontianjia', name: '发布需求', color: 'linear-gradient(-29deg, #ffa948 0%, #ffde71 100%), linear-gradient(#f3403a, #f3403a)' },
        // { iconHref: 'iconquanbugengduo', name: '全部任务', color: 'linear-gradient(0deg, #9678fa 0%, #ccc4db 100%), linear-gradient(#f3403a, #f3403a)' }
      ],
      // 通知
      notice: ''
    };
  },
  methods: {
    nextPage (Name, id) {
      sessionStorage.setItem('taskId', id);
      this.$router.push({ name: Name, params: { id: id } });
    },
    changeTaskType (typeId) {
      const vm = this;
      // 初始化下面参数
      [vm.taskType, vm.pageIndex, vm.tasklist] = [typeId, -1, []];
      this.onLoad();
    },
    handleSwipe (url) {
      console.log(url);
    },
    async onLoad () {
      const vm = this;
      let res = {};
      vm.pageIndex += 1;
      if (vm.taskType === null) {
        res = await this.$api.task({ page: vm.pageIndex });
      } else {
        res = await this.$api.task({ page: vm.pageIndex, cid: vm.taskType });
      }
      const [data] = [res.data.info];
      console.log(res);
      [vm.images, vm.notice, vm.btnnav] = [data.adv, vm.arrToStr(data.new), data.cate_list];
      vm.handleList(data.task_list);
    },
    handleList (resListArr) {
      const vm = this;
      if (resListArr.length !== 0) {
        vm.finishedText = '';
        resListArr.map(item => {
          vm.tasklist.push(item);
        });
        // 加载状态结束
        vm.loading = false;
      } else {
        // 加载状态结束
        vm.loading = false;
        vm.finishedText = '暂时没有新任务咯~';
        vm.finished = true;
        // 将页码置0
        // vm.pageIndex = 0;
      }
      // 数据全部加载完成
      // if (vm.resType === 0) {
      //   vm.finished = true;
      //   // 将页码置0
      //   vm.pageIndex = 0;
      // }
    },
    arrToStr (arr) {
      // 拼接滚动新闻
      let str = '';
      arr.map(item => {
        // 使用\xa0-,它是一个NO-BREAK SPACE char。UTF-8编码表和Unicode字符
        str = `${str}${item.content}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`;
      });
      return str;
    }
  }
};
</script>

<style scoped lang="less" >
@bgcolor: #f7f7f8;
@fontsize: 16px;
@color: red;
@width: 310px;
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
  height: 100%;
  position: relative;
  .roll {
    background-color: white;
    font-size: @fontsize+2px;
    //给滚动到底部留出滚动空间
    padding-bottom: 54px;
    // .swipe{
    //   .imgBox{
    //     height: 120px;
    //   }
    // }
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
          -webkit-clip-path: circle(50% at 50% 50%);
          clip-path: circle(50% at 50% 50%);
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
    .list {
      padding-bottom: 16px;
      li {
        width: @width;
        margin: 10px auto;
        height: 110px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-right: 12px;
        padding-left: 10px;
        box-shadow: -2px 1px 10px 1px rgba(95, 95, 95, 0.1);
        .money {
          height: 90px;
          width: 70px;
          .p1 {
            height: 14.6px;
            .centerBox();
            font-family: SimHei;
            font-size: 11px;
            letter-spacing: 0px;
            color: #b27706;
            background-color: #ffbb56;
            padding-top: 3px;
          }
          .center {
            height: 8px;
            background-color: #ffbb56;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .div1 {
              width: 5px;
              height: 6px;
              background-color: #fff;
              border-top-right-radius: 100% 50%;
              border-bottom-right-radius: 100% 50%;
            }
            .div2 {
              width: 60px;
              height: 8px;
              // background-color: #0373f8;
              color: white;
              font-size: 8px;
              .centerBox();
              white-space: nowrap;
              overflow: hidden;
              text-overflow: clip;
            }
            .div3 {
              width: 5px;
              height: 6px;
              background-color: #fff;
              border-top-left-radius: 100% 50%;
              border-bottom-left-radius: 100% 50%;
            }
          }
          .p2 {
            height: 58px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            // padding-bottom: 15px;
            background-color: #ffbb56;
            .span1 {
              font-family: PingFang-SC-Medium;
              font-size: 14px;
            }
            .span2 {
              font-family: PingFang-SC-Bold;
              letter-spacing: -1px;
              font-size: 26px;
            }
          }
          .bottom {
            height: 6.4px;
            display: flex;
            align-items: flex-end;
            background-color: #ffbb56;
            div {
              height: 100%;
              width: 7px;
              margin: 0;
              background-color: #fff;
              border-top-left-radius: 50%;
              border-top-right-radius: 50%;
            }
          }
        }
        .content {
          height: 80px;
          flex: 2.5;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .div1 {
            display: flex;
            align-items: center;
            .span1 {
              font-size: 9px !important;
              letter-spacing: 1px;
              background-image: linear-gradient(
                  -45deg,
                  #ff8c4c 0%,
                  #ffc558 100%
                ),
                linear-gradient(#fe1424, #fe1424);
              margin-right: 4px;
            }
            .span2 {
              font-family: SimHei;
              font-size: 15px;
              font-weight: bold;
              letter-spacing: 0px;
              color: #333333;
            }
          }
          .div2 {
            font-family: SimHei;
            font-size: 13px;
            letter-spacing: 0px;
            // color: #999999;
            color: red;
          }
          .div3 {
            width: 46%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
        .btn {
          height: 80px;
          flex: 1.2;
          .centerBox();
          .a-btn {
            width: 85% !important;
            .centerBox();
            box-shadow: 0px 2px 5px 0px rgba(4, 116, 248, 0.3);
            border-radius: 28px;
          }
        }
      }
    }
  }
  .fix-btn {
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 50px;
    text-align: center;
    padding: 6px 16px;
  }
}
</style>
