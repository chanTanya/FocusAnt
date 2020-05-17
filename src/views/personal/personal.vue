<template>
  <div class="personal">
    <header-nav :title="title" />
    <div class="personal-container">
      <div class="user">
        <div class="user-avatar">
          <img src="../../assets/images/avatar.jpg" alt="" />
        </div>
        <div class="user-info">
          <p class="user-name" @click="() => this.$router.push('/login')">
            立即登录
          </p>
          <p class="user-des">您还没有登录哦</p>
        </div>
      </div>
      <div class="user-detail">
        <div class="user-detail-box">
          <p class="count">0</p>
          <p class="box-name">好友</p>
        </div>
        <div class="user-detail-box">
          <p class="count">0</p>
          <p class="box-name">积分</p>
        </div>
        <div class="user-detail-box">
          <p class="count">0</p>
          <p class="box-name">余额</p>
        </div>
        <div class="user-detail-box">
          <p class="count">0</p>
          <p class="box-name">团队</p>
        </div>
      </div>
      <div class="user-welfare">
        <img src="../../assets/images/new-user.jpg" alt="" />
      </div>
      <div class="user-cell-operate">
        <van-cell-group>
          <van-cell
            is-link
            v-for="cell of cellGroup"
            :key="cell.id"
            :to="cell.path"
          >
            <template #title>
              <icon-svg size="22px" :iconHref="cell.icon" />
              <span>{{ cell.title }}</span>
            </template>
            <template #default v-if="cell.value !== ''">
              <span :style="{ color: cell.color }">{{ cell.value }}</span>
              <icon-svg
                v-if="cell.id === 1"
                iconHref="iconguanyuwomen"
                size="13px"
              />
            </template>
          </van-cell>
          <!-- <van-cell is-link value="未签到" title="签到任务" />
          <van-cell is-link value="我的团队" />
          <van-cell is-link value="我的邀请码" />
          <van-cell is-link value="升级会员" />
          <van-cell is-link value="设置" />
          <van-cell is-link value="新手帮助" />
          <van-cell is-link value="反馈与投诉" />
          <van-cell is-link value="关于我们" />
          <van-cell is-link value="客服" /> -->
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/base-header/base-header';
export default {
  name: 'personal',
  components: {
    HeaderNav
  },
  data() {
    return {
      cellGroup: [
        {
          id: 0,
          title: '邀请奖励',
          icon: 'icontianjiayonghu',
          value: '专属三大权益',
          color: '#ff0000'
        },
        {
          id: 1,
          title: '签到任务',
          icon: 'iconqiandao2-copy',
          value: '未签到',
          color: '#ffc740'
        },
        {
          id: 2,
          title: '我的团队',
          icon: 'iconwodetuandui',
          value: '获取更大收益',
          path: '/myteam'
        },
        {
          id: 3,
          title: '我的邀请码',
          icon: 'iconerweima',
          value: '1259878',
          color: '#ff0000 ',
          path: '/invite'
        },
        {
          id: 4,
          title: '升级会员',
          icon: 'iconhuiyuan',
          value: '自助完成更多任务'
        },
        {
          id: 5,
          title: '设置',
          icon: 'iconshezhi1',
          value: '',
          path: '/userinfo'
        },
        {
          id: 6,
          title: '新手帮助',
          icon: 'iconxinshoubangzhux',
          value: ''
        },
        {
          id: 7,
          title: '反馈与投诉',
          icon: 'iconfankui',
          value: '',
          path: '/feedback'
        },
        {
          id: 8,
          title: '关于我们',
          icon: 'iconguanyuwomen',
          value: '',
          path: '/about'
        },
        {
          id: 9,
          title: '客服',
          icon: 'iconkefu',
          value: '',
          path: '/service'
        }
      ]
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
    hideHeader() {
      return this.$route.meta.hideHeader;
    },
    hideFooter() {
      return this.$route.meta.hideFooter;
    }
  }
};
</script>

<style lang="less" scoped>
.personal {
  width: 100%;
  min-height: 100vh;

  .personal-container {
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    .user {
      height: 130px;
      display: flex;
      align-items: center;
      background: url('../../assets/images/login.jpg') no-repeat;
      background-position: center;
      background-size: cover;
      .user-avatar {
        width: 60px;
        height: 60px;
        margin-left: 5%;
        margin-right: 4%;
        border-radius: 50%;
        background: #dfedfe;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user-info {
        text-align: left;
        color: #fff;
        height: 30%;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        .user-name {
          font-size: 16px;
        }
        .user-des {
          font-size: 12px;
          letter-spacing: 0px;
          opacity: 0.85;
        }
      }
    }
    .user-detail {
      display: flex;
      justify-content: space-between;
      .user-detail-box {
        width: 20%;
        padding: 20px;
        text-align: center;
        font-size: 14px;
        .count {
          color: #fe0000;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .box-name {
          color: #838383;
        }
      }
    }
    .user-welfare {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
      }
      object-fit: cover;
    }
    .user-cell-operate {
      padding-top: 5px;
      .van-cell__title {
        text-align: left;
        display: flex;
        align-items: center;
        font-size: 16px;
        svg {
          margin-right: 8px;
        }
      }
      .van-cell__value {
        span {
          font-size: 14px;
        }

        svg {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
