<template>
  <div class="integral">
    <div class="sign">
      <div class="sign-border-one">
        <div class="sign-border-two">
          <div class="sign-btn">签到</div>
        </div>
      </div>
      <div class="sign-hint">已连续签到0天，第30天送黄金会员哦~</div>
    </div>
    <div class="integral-operate">
      <div
        class="operate-option"
        v-for="operate of operates"
        :key="operate.icon"
      >
        <div class="option-icon">
          <icon-svg size="31px" :iconHref="operate.icon" />
        </div>
        <p>{{ operate.name }}</p>
      </div>
    </div>
    <div class="user-welfare">
      <img src="@/assets/images/new-user.jpg" alt="" />
    </div>
    <div class="integral-hint">
      <p class="integral-hint-title">快速赚积分</p>
      <div class="hint">
        <p>坚持7天100%得现金红包，积分,会员随机大礼包</p>
      </div>
    </div>
    <div class="white-box"></div>
    <div class="integral-purpose">
      <div class="integral-purpose-title">积分的用途</div>
      <div class="intetral-purpost-option">
        <div
          class="purpost-option"
          v-for="purpose of purposes"
          :key="purpose.name"
        >
          <div class="option-icon"></div>
          <p class="option-name">{{ purpose.name }}</p>
          <p class="option-des">{{ purpose.des }}</p>
        </div>
      </div>
      <div class="integral-btn">
        <van-button
          class="btn"
          @click="showShare = true"
          type="primary"
          color="linear-gradient(#0373f8, #0373f8),
    linear-gradient(90deg, #0266ff 0%, #16acff 100%)"
        >
          兑换积分
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'integral',
  data() {
    return {
      operates: [
        { name: '邀请好友', icon: 'iconyaoqing-copy' },
        { name: '定时红包', icon: 'iconhongbao3' },
        { name: '任务赚钱', icon: 'iconrenwu1' },
        { name: '会员福利', icon: 'iconliwu1' }
      ],
      purposes: [
        { name: '兑换现金', des: '累计可兑换现金' },
        { name: '兑换会员', des: '累计可兑换会员' },
        { name: '更多服务', des: '功能不断出新' }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.roundness (@size, @bg) {
  width: @size;
  height: @size;
  border-radius: 50%;
  background-color: @bg;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.imageIcon (@url) {
  background: url(@url) no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.integral {
  .sign {
    width: 100%;
    height: 170px;
    background: url('../../assets/images/integral-bg.jpg') no-repeat;
    background-size: 100% 100%;
    background-position: center;
    .sign-border-one {
      display: inline-block;
      margin: 10px auto 5px auto;
      margin-left: 50%;
      transform: translateX(-50%);
      .roundness(90px, #3499fc);
    }
    .sign-border-two {
      display: inline-block;
      .roundness(75px, #97ccfc);
      .center;
    }
    .sign-btn {
      .roundness(60px, #fff);
      .center;
      line-height: 60px;
      font-size: 16px;
      text-align: center;
      color: #0373f8;
    }
    .sign-hint {
      text-align: center;
      color: #fff;
    }
  }
  .integral-operate {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    background-color: #fff;
    .operate-option {
      text-align: center;
      .option-icon {
        width: 55px;
        height: 55px;
        line-height: 75px;
        text-align: center;
        border-radius: 50%;
        margin-bottom: 10px;
      }
    }
    .operate-option:nth-child(1) {
      .option-icon {
        background-image: linear-gradient(0deg, #fc4235 0%, #ff783d 100%);
        box-shadow: -2px 1px 8px 0px rgba(252, 71, 53, 0.2);
      }
    }
    .operate-option:nth-child(2) {
      .option-icon {
        background-image: linear-gradient(0deg, #fd5f24 0%, #ff9530 100%);
        box-shadow: -2px 1px 8px 0px rgba(253, 97, 36, 0.2);
      }
    }
    .operate-option:nth-child(3) {
      .option-icon {
        background-image: linear-gradient(0deg, #fcaa10 0%, #fae834 100%);
        box-shadow: -4px 3px 8px 0px rgba(252, 172, 18, 0.1);
      }
    }
    .operate-option:nth-child(4) {
      .option-icon {
        background-image: linear-gradient(0deg, #4278ff 0%, #4a8efe 100%);
        box-shadow: -4px 3px 8px 0px rgba(67, 120, 255, 0.1);
      }
    }
  }
  .user-welfare {
    width: 100%;
    height: 100%;
    background-color: #fff;
    img {
      width: 100%;
      // height: 100%;
    }
    object-fit: cover;
  }
  .integral-hint {
    text-align: center;
    background-color: #fff;
    display: inline-block;
    width: 100%;
    padding-bottom: 20px;
    .integral-hint-title {
      margin: 10px 0;
      font-size: 14px;
      font-weight: bold;
    }
    .hint {
      height: 50px;
      line-height: 50px;
      font-size: 13 px;
      background: url('../../assets/images/integral-bg2.jpg') no-repeat;
      background-position: center;
      background-size: 100% 100%;
      color: #fff;
    }
  }
  .white-box {
    height: 20px;
  }
  .integral-purpose {
    // margin-top: 10px;
    padding-bottom: 40px;
    background-color: #fff;
    .integral-purpose-title {
      text-align: center;
      padding: 10px 0;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid #eaeaea;
    }
    .intetral-purpost-option {
      padding: 25px 0;
      display: flex;
      justify-content: space-around;
      .purpost-option {
        text-align: center;
        .option-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto;
        }
        .option-name {
          margin-top: 5px;
          font-size: 14px;
        }
        .option-des {
          color: #838383;
          font-size: 10px;
        }
      }
      .purpost-option:nth-child(1) {
        .option-icon {
          .imageIcon ('../../assets/images/coin.jpg');
        }
      }
      .purpost-option:nth-child(2) {
        .option-icon {
          .imageIcon ('../../assets/images/gift.jpg');
        }
      }
      .purpost-option:nth-child(3) {
        .option-icon {
          .imageIcon ('../../assets/images/sign.jpg');
        }
      }
    }
    .integral-btn {
      text-align: center;
      margin-top: 20px;
      .btn {
        width: 90%;
        height: 36px;
        line-height: 36px;
        box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
        border-radius: 5px;
      }
    }
  }
}
</style>
