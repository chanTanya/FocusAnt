<template>
  <div class="user-earning">
    <div class="earning-detail">
      <div class="earning-card">
        <div class="invitation">邀请好友</div>
        <div class="earning-number">收益: 569元</div>
        <div class="estimate-embody">
          <div class="estimate">本月预估: 220</div>
          <span>|</span>
          <div class="embody">累计体现: 220</div>
        </div>
      </div>
      <div class="upgrade-prompt">
        <span class="vip-icon"> </span>
        <p>会员专属赚钱特权</p>
        <p>三个收益实现躺赚人生！</p>
        <van-button
          size="mini"
          type="primary"
          color="linear-gradient(#0373f8,#0373f8), linear-gradient(90deg, #0266ff 0%, #16acff 100%)"
          >升级</van-button
        >
      </div>
      <div class="team-earning">
        <div class="team-earning-title">
          <icon-svg iconHref="iconqiandai2" />团队收益 (躺赢)
        </div>
        <div class="team-earning-detail">
          <van-button
            size="mini"
            type="primary"
            color="linear-gradient(#0373f8,#0373f8), linear-gradient(90deg, #0266ff 0%, #16acff 100%)"
            ><span>查看详情</span><van-icon name="arrow"
          /></van-button>
          <span class="team-earning-des">
            邀请好友,获得团队收益
          </span>
        </div>
      </div>
      <div class="balance-invited">
        <card-box :content="balance" />
        <card-box :content="invited" />
      </div>
    </div>
    <plain-box name="每日计划">
      <template slot="content">
        <div class="insistent-days">
          <p class="days">已坚持第 <span class="red-span">0</span> 天</p>
          <div class="insistent-hint">
            <p>坚持完成每日计划</p>
            <p>送会员红包福利</p>
            <p>会员收益稳步上涨</p>
          </div>
        </div>
        <share-card :task="task" v-for="task of taskList" :key="task.name" />
      </template>
      <template slot="more">
        <p>更多奖励计划</p>
        <van-icon name="arrow" color="#ff0000" />
      </template>
    </plain-box>
    <plain-box name="收益计划">
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
          <!-- <div class="vip-detail">
            <div class="vip-grade">
              至尊会员
            </div>
            <div class="vip-des">
              <p>每天可自动完成任务：350条</p>
              <p>每天任务佣金保底：180—200元</p>
            </div>
          </div>
          <div class="vip-detail">
            <div class="vip-grade">
              至尊会员
            </div>
            <div class="vip-des">
              <p>每天可自动完成任务：350条</p>
              <p>每天任务佣金保底：180—200元</p>
            </div>
          </div>
          <div class="vip-detail">
            <div class="vip-grade">
              至尊会员
            </div>
            <div class="vip-des">
              <p>每天可自动完成任务：350条</p>
              <p>每天任务佣金保底：180—200元</p>
            </div>
          </div> -->
        </div>
      </template>
      <template slot="more">
        <p>了解会员怎么赚钱</p>
        <van-icon name="arrow" color="#ff0000" />
      </template>
    </plain-box>
    <plain-box name="平台介绍">
      <template slot="content">
        <div class="platfor-introduce">
          <div
            class="platfor-trait"
            v-for="trait of platforList"
            :key="trait.icon"
          >
            <div class="trait-t">
              <div class="trait-icon">
                <icon-svg size="24px" :iconHref="trait.icon" />
              </div>
              <div class="trait-content">
                <p class="trait-name">{{ trait.name }}</p>
                <p class="trait-des">{{ trait.des }}</p>
              </div>
            </div>
            <div class="trait-b">
              <p>{{ trait.hint }}</p>
            </div>
          </div>
        </div>
      </template>
    </plain-box>
    <van-button color="#fff" class="service-btn" @click="toService">
      <icon-svg iconHref="iconkefu1" />客服中心
    </van-button>
  </div>
</template>

<script>
import CardBox from './components/card-box/card-box';
import PlainBox from './components/plain-title/plain-title';
import ShareCard from './components/share-card/share-card';
export default {
  name: 'Earning',
  data() {
    return {
      balance: {
        icon: 'iconqianbao',
        name: '钱包余额',
        count: '258元'
      },
      invited: {
        icon: 'iconwodetuandui',
        name: '邀请记录',
        count: '25人'
      },
      taskList: [
        {
          name: '分享2次朋友圈',
          content: '早晚各一次, 至少保留10小时',
          icon: 'iconpengyouquan1'
        },
        {
          name: '批量群发好友1次',
          content: '要求多选择9个好友',
          icon: 'iconzhifeiji'
        },
        {
          name: '批量群发微信群1次',
          content: '要求多选择9个微信群',
          icon: 'iconweixin2'
        }
      ],
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
      platforList: [
        {
          name: '产品介绍',
          icon: 'iconchanpin',
          des: '产品介绍口碑检验',
          hint: '百万用户平台良好口碑认可'
        },
        {
          name: '服务保障',
          icon: 'iconbao',
          des: '领先的服务与保障',
          hint: '官方直营正规服务专属客服'
        },
        {
          name: '平台资质',
          icon: 'iconmexzz06',
          des: '资质齐全平台正规',
          hint: '平台有保障才能够健康发展'
        },
        {
          name: '收益答疑',
          icon: 'icondayi',
          des: '邀请规则收益提现',
          hint: '规则透明简单提现极速到账'
        }
      ]
    };
  },
  components: {
    CardBox,
    PlainBox,
    ShareCard
  },
  methods: {
    toService() {
      this.$router.push('/service');
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/assets/less/base.less';
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-earning {
  .center;
  width: 100%;
  // height: 100%;
  .earning-detail {
    width: 100%;
    padding-bottom: 20px;
    .center;
    background-color: #fff;
    .earning-card {
      width: 95%;
      height: 175px;
      position: relative;
      background: url('../../assets/images/card.jpg') no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 5px;
      .invitation {
        padding: 5px 7px;
        font-size: 14px;
        color: #fff;
        background-image: linear-gradient(90deg, #68cf73 0%, #51b25d 100%),
          linear-gradient(#7085a5, #7085a5);
        position: absolute;
        border-radius: 0px 10px 10px 0px;
        top: 10px;
        left: 0;
      }
      .earning-number {
        display: inline-block;
        width: 100%;
        margin-top: 50px;
        color: #fff;
        text-align: center;
        font-size: 22px;
      }
      .estimate-embody {
        width: 70%;
        margin: 30px auto;
        font-size: 16px;
        color: #fff;
        display: flex;
        justify-content: space-between;
      }
    }
    .upgrade-prompt {
      width: 95%;
      display: flex;
      padding: 6px 0;
      margin-top: 10px;
      justify-content: space-around;
      align-items: center;
      background-color: #dbedfe;
      border-radius: 4px;
      // font-size: 12px;
      color: #686868;
      border: solid 1.5px #0373f8;
      .vip-icon {
        width: 16px;
        height: 16px;
        background: url('../../assets/images/vipIcon.jpg') no-repeat;
        background-color: #dbedfe;
        background-size: contain;
      }
    }
    .team-earning {
      width: 95%;
      height: 75px;
      margin-top: 10px;
      background: url('../../assets/images/earning-bg1.jpg') no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 3px;
      color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .team-earning-title {
        width: 50%;
        font-size: 16px;
        svg {
          margin-right: 5px;
        }
      }
      .team-earning-detail {
        display: flex;
        height: 50%;
        justify-content: space-between;
        flex-direction: column;
        .van-button {
          height: 23px;
          line-height: 23px;
        }
        .team-earning-des {
          margin-top: 3px;
          font-size: 10px;
        }
      }
    }
    .van-button {
      box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
      border-radius: 14px;
      font-size: 10px;
      .van-button__text {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .balance-invited {
      width: 95%;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
  }
  .insistent-days {
    text-align: center;
    .days {
      margin-top: 10px;
      font-size: 14px;
      font-weight: bold;
    }
    .insistent-hint {
      width: 80%;
      margin: 10px auto;
      background-color: #dbedfe;
      border-radius: 5px;
      display: flex;
      padding: 5px 10px;
      color: #0373f8;
      font-weight: bold;
      // letter-spacing: -1px;
      justify-content: space-between;
    }
  }
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
        font-size: 14 px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      .plain-des {
        font-size: 12px;
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
    margin-top: 20px;
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
        font-size: 11px;
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
  .platfor-introduce {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // text-align: center;
    .platfor-trait {
      width: 48%;
      box-sizing: border-box;
      padding: 10px 0 10px 12px;
      .trait-t {
        display: flex;
        align-items: center;
        // justify-content: center;
        .trait-icon {
          margin-right: 10px;
        }
        .trait-content {
          .trait-name {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5px;
          }
          .trait-des {
            font-size: 12px;
            color: #bbbbbb;
          }
        }
      }
      .trait-b {
        font-size: 12px;
        margin-top: 10px;
        // text-align: center;
        font-weight: bold;
      }
    }
    .platfor-trait:nth-child(1) {
      border-right: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
    }
    .platfor-trait:nth-child(2) {
      border-bottom: 1px solid #eaeaea;
    }
    .platfor-trait:nth-child(3) {
      border-right: 1px solid #eaeaea;
    }
  }
  .service-btn {
    margin: 20px 0;
    .white-btn(90%, 34px);
    // margin-bottom: 20px;
    .van-button__text {
      color: #0373f8;
    }
  }
}
</style>
