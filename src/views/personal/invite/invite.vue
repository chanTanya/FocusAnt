<template>
  <div class="invite">
    <sublevel-nav />
    <div class="invite-code">
      <div class="share-code">
        <div class="title">
          <div class="circle small"></div>
          <div class="circle default"></div>
          <p>我的二维码</p>
          <div class="circle default"></div>
          <div class="circle small"></div>
        </div>
        <div class="QR-code">
          <img src="@/assets/images/qrcode.jpg" alt="" />
        </div>
        <div class="my-code">
          <p>我的邀请码: <span class="red-span">3N62Q</span></p>
        </div>
        <div class="share-btn">
          <van-button
            class="btn"
            @click="showShare = true"
            type="primary"
            color="linear-gradient(#0373f8, #0373f8),
    linear-gradient(90deg, #0266ff 0%, #16acff 100%)"
          >
            立即分享给好友
            <span class="btn-arrow"></span>
          </van-button>
        </div>
      </div>
    </div>
    <div class="save-code">
      <van-button class="save-btn" type="primary">保存图片到相册</van-button>
      <div class="hint">额外奖励：每天分享2次得10个积分</div>
    </div>
    <van-popup v-model="showShare" position="bottom">
      <div class="share-way">
        <div class="share-option">
          <icon-svg size="30px" iconHref="iconpengyouquan2" />
          <p>朋友圈</p>
        </div>
        <div class="share-option">
          <icon-svg size="30px" iconHref="iconweixin" />
          <p>微信</p>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'invite',
  data() {
    return {
      showShare: false
    };
  }
};
</script>

<style lang="less" scoped>
@import '~@/assets/less/base.less';
.invite {
  width: 100%;
  min-height: 100vh;
  // position: fixed;
  .invite-code {
    width: 100%;
    height: 480px;
    background: url('../../../assets/images/invite-bg.jpg') no-repeat;
    background-position: center;
    background-size: 100% 100%;
    margin-bottom: 20px;
    .share-code {
      position: absolute;
      top: 177px;
      left: 50%;
      border-radius: 5px;
      transform: translateX(-50%);
      width: 72%;
      height: 300px;
      background-color: #fff;
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        p {
          color: #0373f8;
          font-size: 16px;
          font-weight: bold;
        }
        .circle {
          background-image: linear-gradient(#0373f8, #0373f8),
            linear-gradient(135deg, #7123c3 0%, #8788fe 100%);
          border-radius: 50%;
          box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
        }
        .small {
          width: 10px;
          height: 10px;
        }
        .default {
          width: 14px;
          margin: 0 5px;
          height: 14px;
        }
      }
      .QR-code {
        width: 160px;
        margin: 5px auto;
        // height: 200px;
        img {
          width: 100%;
          height: 100%;
          // object-fit: c;
        }
      }
      .my-code {
        color: #0373f8;
        font-size: 14px;
        text-align: center;
        font-weight: bold;
      }
      .share-btn {
        text-align: center;
        margin: 15px 0;
        .btn {
          width: 90%;
          box-shadow: 0px 3px 9px 0px rgba(4, 116, 248, 0.3);
          border-radius: 5px;
          letter-spacing: 2px;
          font-weight: bold;
          .van-button__text {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .btn-arrow {
            display: inline-block;
            width: 30px;
            height: 13px;
            margin-left: 5px;
            background: url('../../../assets/images/btn-arrow.jpg') no-repeat;
            background-position: center;
            background-size: cover;
          }
          // height: 35px;
        }
      }
    }
  }
  .save-code {
    text-align: center;
    .save-btn {
      .white-btn(60%, 36px);
      margin-bottom: 20px;
      .van-button__text {
        color: #0373f8;
      }
    }
    .hint {
      color: #0373f8;
    }
  }
  .share-way {
    display: flex;
    .share-option {
      width: 50%;
      position: relative;
      text-align: center;
      padding: 20px 0;
      svg {
        margin-bottom: 5px;
      }
    }
    .share-option:nth-child(1)::after {
      content: '';
      width: 1px;
      height: 30px;
      background-color: #eaeaea;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
  }
}
</style>
