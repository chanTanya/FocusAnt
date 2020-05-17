<template>
  <div class="container">
    <div class="topBox" v-lazy:background-image="bgimg" :style="{'background-size':'cover'}">
      <div class="row">
        <div class="box box1">
          <div class="imgBox">
            <van-image class="img" round lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div role="p" class="nameBox">张三</div>
        </div>
        <div class="box box2">
          <div class="btn">升级会员</div>
        </div>
        <div class="box box3">
          <icon-svg iconHref="iconhuiyuan3" size="40px"></icon-svg>
          <p>
            <span class="span1">会员等级</span>
            <span class="span2">0级</span>
          </p>
        </div>
        <div class="box box4">
          <icon-svg iconHref="iconteam" size="40px"></icon-svg>
          <p>
            <span class="span1">我的团队</span>
            <span class="span2">0人</span>
          </p>
        </div>
      </div>
    </div>

    <div class="listBox">
      <div class="div1">
        <icon-svg iconHref="iconliwu" size="36px"></icon-svg>
        <span class="text">加入我们-瓜分亿级广告市场</span>
      </div>
      <div class="div2">
        <van-divider :style="{ color: '#0373f8', borderColor: '#0373f8', padding: '0 16px',fontWeight:'bold'}">
          如何赚钱
        </van-divider>
        <p class="text">只需分享无需囤货屯码，让海量用户为您打工</p>
      </div>
      <div class="div3">
        <ul>
          <li>
            <div class="img img1">
              <icon-svg iconHref="iconzanwushouyi" size="28px"></icon-svg>
            </div>
            <p class="text">
              <span class="span1">任务佣金奖励</span>
              <span class="span2">购买软件自动完成任务赚取任务佣金</span>
            </p>
          </li>
          <li>
            <div class="img img2">
              <icon-svg iconHref="iconyaoqinghaoyou" size="28px"></icon-svg>
            </div>
            <p class="text">
              <span class="span1">推荐好友奖励</span>
              <span class="span2">推荐好友充值购买软件您可获得推荐奖励</span>
            </p>
          </li>
          <li>
            <div class="img img3">
              <icon-svg iconHref="iconshouyizoushi" size="28px"></icon-svg>
            </div>
            <p class="text">
              <span class="span1">团队任务奖励</span>
              <span class="span2">让千万用户为您打工，团队每日任务佣金分红</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="div4">
        一旦邀请成功，该好友收益永远与您相关
      </div>
    </div>

    <p class="pBox">
      <icon-svg iconHref="iconicon-test" size="36px"></icon-svg>
      <span>好友邀请您的奖励</span>
      <span>好友赚钱您得收益</span>
      <icon-svg iconHref="iconicon-test" size="36px"></icon-svg>
    </p>

    <div class="plainBox">
      <plain-box>
        <template slot="content">
          <div class="earning-hint">
            <p>发现商机</p>
            <p>会员躺赚</p>
            <p>三大收益</p>
            <p>极速提现</p>
          </div>
          <div class="earning-plain">
            <div class="plain-card">
              <div class="card-icon"></div>
              <div class="plain-name">好友购会员</div>
              <div class="plain-des">您返利</div>
              <div class="plain-benefit">获得3%直推奖励</div>
            </div>
            <div class="plain-card">
              <div class="card-icon"></div>
              <div class="plain-name">好友做任务</div>
              <div class="plain-des">您返利</div>
              <div class="plain-benefit">每笔任务奖励8%</div>
            </div>
            <div class="plain-card">
              <div class="card-icon"></div>
              <div class="plain-name">好友邀好友</div>
              <div class="plain-des">躺赚收益</div>
              <div class="plain-benefit">永久高额团队奖励</div>
            </div>
          </div>
          <div class="vip-introduce">
            <div class="vip-detail" v-for="vip of vipList" :key="vip.grade">
              <div class="vip-grade">
                {{ vip.grade }}
              </div>
              <div class="vip-des">
                <p v-for="(des, index) of vip.des" :key="index">{{ des }}</p>
              </div>
            </div>
          </div>
        </template>
      </plain-box>
      <div role="button" class="btn">
        <span>了解会员怎么赚钱</span>
        <van-icon name="arrow" color="#fff" />
      </div>

      <div class="appBox">
        <div class="main">
          <p class="p1"> 软件运行参数配置介绍</p>
          <p class="p2"> 根据不同的会员等级配备不同的环境资源</p>
          <div class="grid">
            <div class="a-box" v-for="(item, i) in grid" :key="i">
              <div class="img"></div>
              <p class="p1">{{item.title}}</p>
              <p class="p2">
                <span>{{item.serve}}</span>
                <span>{{item.task}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="btnBox1">
        <div role="button" class="btn">
          <span>了解软件介绍及配置详情</span>
          <van-icon name="arrow" color="#fff" />
        </div>
      </div>

      <div class="line"></div>

      <div class="btnBox2">
        <div class="div1">
          <icon-svg iconHref="iconhuizhang" size="36px"></icon-svg>
        </div>
        <div class="div2">
          <p class="p1">为什么我们值得信赖</p>
          <p class="p2">
            <span>平台介绍</span>
            <span>资质齐全</span>
            <span>保障服务</span>
            <span>百万口碑</span>
          </p>
        </div>
        <div class="div3">
          <icon-svg iconHref="iconarrowRight-fill" size="14px"></icon-svg>
        </div>
      </div>

      <div class="btnBox3">
        <div role="button" class="btn">
          <span>升级会员</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import PlainBox from './components/plain-title/plain-title';
export default {
  name: 'VipCenter',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PlainBox
  },
  data () {
    return {
      bgimg: require('@/assets/images/bg-vipcenter.jpg'),
      vipList: [
        {
          grade: '至尊会员',
          des: ['每天可自动完成任务: 350条', '每天任务佣金保底: 180-200元']
        },
        {
          grade: '钻石会员',
          des: ['每天可自动完成任务: 170条', '每天任务佣金保底: 70-100元']
        },
        {
          grade: '铂金会员',
          des: ['每天可自动完成任务: 35条', '每天任务佣金保底: 20-70元']
        },
        {
          grade: '黄金会员',
          des: ['每天可自动完成任务: 10条', '每天任务佣金保底: 5-6元']
        }
      ],
      grid: [
        { title: '普通会员版', serve: '共享一台服务器资源', task: '每日自动完成1-2条任务' },
        { title: '黄金会员版', serve: '腾讯云2G  VPS双线程', task: '每日至少自动完成10条任务' },
        { title: '铂金会员版', serve: '腾讯云4G  VPS双线程', task: '每日自动完成35条任务' },
        { title: '钻石会员版', serve: '独立至强4核  8G  BGP物理服务器', task: '每日自动完成170条任务' },
        { title: '至尊会员版', serve: '独立至强12核  16G  BGP物理服务器', task: '每日自动完成350条任务' },
        { title: '任务端口多开', serve: '达到至尊会员可申请多开服务器', task: '每日自动完成更多任务,收获更大收益' }
      ]

    };
  },
  computed: {
    // userId: function () { return this.store.state.personMsg.id }
  },
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    console.log(this.grid[1].serve);
  },
  // 生命周期 - 更新之后
  updated () { },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated () { },
  beforeDestroy () {

  },
  methods: {

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
.mainBox() {
  // background-image: linear-gradient(180deg, #bdd8fa 0%, #ffffff 100%);
  // background-blend-mode: normal, normal;
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
.btnBox(@w,@h,@bgcolor,@bdradius,@fontsize,@color) {
  .centerBox();
  height: @h;
  width: @w;
  background-color: @bgcolor;
  border-radius: @bdradius;
  color: @color;
  font-size: @fontsize;
  span {
    display: inline-block;
    // margin-right: 6px;
  }
}
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

.container {
  background-image: linear-gradient(180deg, #b0d4fa 0%, #ffffff 30%);
  background-blend-mode: normal, normal;
  // 容器与子盒子的上下边距通过容器的padding去设置
  // 因为容器的头部的第一个盒子的maigin-top不是相对于容器的boder-top，而是容器外的盒子；
  // 除非容器有padding-top,才会根据容器的padin-top去计算它的margin-top,其他方向依此类推
  // 具体涉及到css margin合并的问题,https://blog.csdn.net/hahhahahaa/article/details/80676873
  padding-top: 14px;
  .topBox {
    height: 160px;
    width: 90%;
    border-radius: 8px;
    background-size: cover;
    margin: 0px auto;
    .row {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .box {
        width: 50%;
        height: 50%;
        .centerBox();
        box-sizing: border-box;
        .span1 {
          color: #000000;
          font-size: 15px;
        }
        .span2 {
          color: #838383;
          font-size: 15px;
        }
        p {
          min-width: 80px;
          height: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
      }
      .box1 {
        padding-right: 20px;
        padding-top: 10px;
        .imgBox {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .nameBox {
          color: white;
          font-size: 16px;
          margin-left: 10px;
        }
      }
      .box2 {
        padding-bottom: 30px;
        padding-left: 48px;
        .btn {
          .btnBox(78px, 22px, #000000, 12px, 12px, white);
          opacity: 0.5;
        }
      }
    }
  }
  .listBox {
    width: 90%;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    margin: 16px auto 0 auto;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    .div1 {
      height: 52px;
      background-color: #0373f8;
      .centerBox();
      .text {
        font-size: 13px;
        color: #ffffff;
      }
    }
    .div2 {
      .text {
        .centerBox();
        color: #0373f8;
        font-weight: bold;
        font-size: 11px;
        margin-bottom: 16px;
      }
    }
    .div4 {
      height: 66px;
      .centerBox();
      color: #ff0000;
      font-weight: bold;
      font-size: 11px;
    }
    .div3 {
      padding: 0 16px;
      ul {
        &:nth-child(1) {
          border-top: 1px solid #eceef5;
        }
        li {
          display: flex;
          align-items: center;
          height: 70px;
          border-bottom: 1px solid #eceef5;
          .img {
            margin: 0 16px 0 8px;
            height: 44px;
            width: 44px;
            .centerBox();
            border-radius: 50%;
          }
          .img1 {
            background-image: linear-gradient(0deg, #ffae00 0%, #fc7a02 100%),
              linear-gradient(#f3dba4, #f3dba4);
          }
          .img2 {
            background-image: linear-gradient(0deg, #baff00 0%, #02fc95 100%),
              linear-gradient(#f3dba4, #f3dba4);
          }
          .img3 {
            background-image: linear-gradient(0deg, #027dfc 0%, #0254fc 100%),
              linear-gradient(#f3dba4, #f3dba4);
          }
          .text {
            height: 44px;
            display: flex;
            flex-direction: column;
            font-weight: bold;
            align-items: flex-start;
            justify-content: center;
            .span1 {
              font-size: 13px;
              color: #000000;
            }
            .span2 {
              font-size: 11px;
              color: #cccccc;
            }
          }
        }
      }
    }
  }
  .pBox {
    height: 70px;
    .centerBox();
    font-size: 14px;
    font-weight: bold;
    color: #f5c32b;
    span {
      display: inline-block;
      margin: 0 4px;
    }
  }
  .plainBox {
    .earning-hint {
      display: flex;
      width: 70%;
      margin: 15px auto;
      justify-content: space-between;
      color: #0373f8;
      font-weight: bold;
      font-size: 12px;
    }
    .earning-plain {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      .plain-card:nth-child(1) {
        .card-icon {
          background: url('../../assets/images/shop.jpg') no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
      .plain-card:nth-child(2) {
        .card-icon {
          background: url('../../assets/images/friend.jpg') no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
      .plain-card:nth-child(3) {
        .card-icon {
          background: url('../../assets/images/invite.jpg') no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
      .plain-card {
        width: 30%;
        text-align: center;
        background-color: #edf6fe;
        border-radius: 5px;
        .card-icon {
          width: 30px;
          height: 30px;
          margin: 10px auto;
          background-size: contain;
          background-position: center;
        }
        .plain-name {
          font-size: 13px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .plain-des {
          font-size: 10px;
          color: #838383;
          margin-bottom: 5px;
        }
        .plain-benefit {
          width: 100%;
          background-image: linear-gradient(#0373f8, #0373f8),
            linear-gradient(#2188fe, #2188fe);
          box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
          border-radius: 0px 0px 5px 5px;
          color: #fff;
          padding: 5px;
          box-sizing: border-box;
        }
      }
    }
    .vip-introduce {
      display: flex;
      border-radius: 10px;
      flex-wrap: wrap;
      justify-content: center;
      padding: 10px 0;
      border: solid 1px #e1e1e1;
      .vip-detail {
        width: 48%;
        box-sizing: border-box;
        padding: 10px;
        text-align: center;
        .vip-grade {
          padding: 3px;
          width: 65%;
          margin: 0 auto;
          background-color: #dbedfe;
          border-radius: 5px;
          color: #0373f8;
          font-size: 14px;
          font-weight: bold;
        }
        .vip-des {
          margin: 15px 0;
          font-size: 10px;
          font-weight: bold;
          p {
            margin-bottom: 5px;
          }
        }
      }
      .vip-detail:nth-child(1) {
        border-bottom: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;
      }
      .vip-detail:nth-child(3) {
        border-right: 1px solid #eaeaea;
      }
      .vip-detail:nth-child(2) {
        border-bottom: 1px solid #eaeaea;
      }
    }
    .btn {
      .centerBox();
      height: 36px;
      width: 90%;
      margin: 22px auto;
      background-color: #ff0000;
      border-radius: 10px;
      color: white;
      font-size: 13px;
      span {
        display: inline-block;
        margin-right: 6px;
      }
    }
    .btnBox1 {
      .centerBox();
      height: 70px;
      background-color: #fff;
      .btn {
        .centerBox();
        height: 36px;
        width: 90%;
        margin: 0px auto;
        background-color: #ff0000;
        border-radius: 10px;
        color: white;
        font-size: 13px;
      }
    }
    .line {
      height: 10px;
      background-color: #edf2f6;
    }
    .btnBox2 {
      height: 80px;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 10% 0 8%;
      justify-content: space-between;
      .div1 {
        height: 44px;
        width: 44px;
        .centerBox();
        border-radius: 50%;
        background-image: linear-gradient(0deg, #027dfc 0%, #0254fc 100%),
          linear-gradient(#f3dba4, #f3dba4);
        margin-right: 12px;
      }
      .div2 {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        height: 44px;
        justify-content: space-around;
        width: 75%;
        .p1 {
          color: #000000;
          font-size: 13px;
        }
        .p2 {
          color: #cccccc;
          font-size: 11px;
          span {
            display: inline-block;
            margin: 0px 3px 0px 0px;
          }
        }
      }
      .div3 {
        height: 20px;
        width: 20px;
        .centerBox();
        border-radius: 50%;
        background-color: #e9e8e8;
      }
    }
    .btnBox3 {
      .centerBox();
      height: 66px;
      background-color: #fff;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      .btn {
        .centerBox();
        height: 36px;
        width: 90%;
        margin: 0 auto;
        background-image: linear-gradient(#0373f8, #0373f8),
          linear-gradient(#ffffff, #ffffff);
        background-blend-mode: normal, normal;
        border-radius: 6px;
        color: white;
        font-size: 13px;
      }
    }
    .appBox {
      padding: 6% 3%;
      background-image: linear-gradient(180deg, #dce9f8ae 0%, #dce9f8ae 0% 100%);
      .main {
        background-color: #fff;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 5% 4%;
        p {
          font-size: 13px;
          font-weight: bold;
          .centerBox();
          height: 26px;
        }
        .p1 {
          color: #0373f8;
        }
        .p2 {
          color: #ff0000;
          margin-bottom: 10px;
        }
        .grid {
          // min-height: 116px;
          // max-width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          .a-box {
            &:nth-child(1) {
              border-right: 1px solid #eceef5;
              border-bottom: 1px solid #eceef5;
            }
            &:nth-child(2) {
              border-bottom: 1px solid #eceef5;
            }
            &:nth-child(3) {
              border-right: 1px solid #eceef5;
              border-bottom: 1px solid #eceef5;
            }
            &:nth-child(4) {
              border-bottom: 1px solid #eceef5;
            }
            &:nth-child(5) {
              border-right: 1px solid #eceef5;
            }
            height: 146px;
            padding-bottom: 16px;
            width: 50%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            .img {
              width: 54.4px;
              height: 58px;
              background-image: url('../../assets/images/icon-addvip.png');
              background-size: cover;
              background-repeat: no-repeat;
            }
            .p1 {
              font-size: 11px;
              font-weight: bold;
              color: #000000;
            }
            .p2 {
              white-space: pre;
              display: flex;
              flex-direction: column;
              font-size: 9px;
              color: #838383;
            }
          }
        }
      }
    }
  }
}
</style>
