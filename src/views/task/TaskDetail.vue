<template>
  <div class="container">
    <van-nav-bar title="任务详情" right-text="新手详情" left-arrow @click-left="nextPage('Task')" @click-right="nextPage('Task')" />
    <div class="roll">
      <div class="msg">
        <div class="task">
          <P class="top">
            <span class="name">{{resdata.title}}</span>
            <span class="money">+{{resdata.price}}元</span>
          </P>
          <div class="bottom">
            <span class="span">{{resdata.apply_num}}人已赚到</span>
            <span class="span">剩余{{resdata.max_num}}个名额</span>
            <span class="span">{{48}}小时内审核</span>
          </div>
        </div>
        <!-- 下边框 -->
        <div class="van-hairline--bottom"></div>
        <p class="discribe">
          <span class="title">任务描述：</span>
          <span>{{resdata.info}}</span>
        </p>
      </div>
      <div class="main">
        <p class="top">发布方</p>
        <div class="bottom">
          <van-image :src="hostImg" width="64px" height="64px"></van-image>
          <span class="name">
            {{resdata.username}}
          </span>
        </div>
      </div>
      <div class="check">
        <p class="top">审核标准</p>
        <div class="center2">
          <van-tag :color="item.bgcolor" plain v-for="(item, index) in check.arr2" :key="index" size="large">{{item.text}}</van-tag>
        </div>
        <div class="bottom">
          <span class="url">{{resdata.taskuser}}</span>
          <van-button plain type="info" size="small" class="tag-read" :data-clipboard-text="resdata.taskuser" @click="copy">点击复制</van-button>
        </div>
      </div>
      <div class="imgs">
        <van-tabs v-model="active" swipeable>
          <van-tab title="任务步骤">
            <div v-if="!step[0]" class="imgbox">
              <p class="emptyTitle">任务已过期</p>
              <van-image :src="require('@/assets/images/empty.jpg')"></van-image>
            </div>
            <div v-else class="imgbox" v-for="(item, index) in step" :key="index">
              <p class="stepTitle">{{item.text}}</p>
              <van-image :src="`${baseUrl}${item.img}`" fit="contain"></van-image>
            </div>
          </van-tab>
          <van-tab title="审核样例">
            <div v-if="!example" class="imgbox">
              <p class="emptyTitle">暂无样例</p>
              <van-image :src="require('@/assets/images/empty.jpg')"></van-image>
            </div>
            <div v-else class="imgbox" v-for="(item, index) in example" :key="index">
              <van-image :src="`${baseUrl}${item}`" fit="contain"></van-image>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- color text disavle -->
    <div class="fix-btn">
      <van-button :disabled="btn.disable" block round :color="btn.bgcolor">{{btn.text}}</van-button>
    </div>
  </div>

</template>

<script>
import Clipboard from 'clipboard';
// @ is an alias to /src
export default {
  name: 'TaskDetail',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Clipboard
  },
  created () {
    const vm = this;
    vm.onLoad();
  },
  updated () {
  },
  // beforeUpdate (to, from, next) {
  //   next(vm => {
  //     console.log(vm.$route);
  //   });
  // },
  mounted () {
  },
  data () {
    return {
      // 发布方头像
      hostImg: '',
      // vant tab 0=第一个
      active: 0,
      step: [],
      example: [],
      check: {
        arr1: ['有头像', '有作品', '案例标准'],
        arr2: [
          { text: '手机认证', bgcolor: '' },
          { text: '微信认证', bgcolor: '' },
          { text: '实名认证', bgcolor: '' },
          { text: '身份认证', bgcolor: '' }
        ]
      },
      resdata: {},
      btn: {
        text: '无法领取',
        bgcolor: 'linear-gradient(to right, #4bb0ff, #6149f6)',
        disable: true
      }
    };
  },
  computed: {
    id () {
      return sessionStorage.getItem('taskId');
    }
  },
  methods: {
    nextPage (Name) {
      this.$router.push({ name: Name });
    },
    copy () {
      var clipboard = new Clipboard('.tag-read');
      clipboard.on('success', e => {
        this.$notify({ type: 'success', message: '😄已为您复制到粘贴板~', duration: 1000 });
        console.log('复制成功');
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on('error', e => {
        // 不支持复制
        this.$notify({ type: 'warning', message: '😩该浏览器暂时不支持复制！', duration: 1000 });
        console.log('该浏览器不支持自动复制');
        // 释放内存
        clipboard.destroy();
      });
    },
    async onLoad () {
      const { id } = this;
      const res = await this.$api.taskDetail({ id: id });
      const [data, vm] = [res.data.info, this];
      console.log(res);
      [vm.resdata, vm.example, vm.step] = [data, data.tushi, vm.handleStep(data.step_info)];
      vm.handleImg(data.logo);
      vm.btnType(data.btn_status, data.status_text);
      vm.checkType(data.is_shouji, data.is_weixin, data.is_shiming, data.is_idcard);
      // 发布方类型
      // vm.imgType()
    },
    imgType () { },
    checkType (shouji, weixin, shiming, idcard) {
      const btnArr = this.check.arr2;
      // eslint-disable-next-line eqeqeq
      shouji === 1 ? btnArr[0].bgcolor = '#f2826a' : btnArr[0].bgcolor = 'gray';
      weixin === 1 ? btnArr[0].bgcolor = '#f2826a' : btnArr[0].bgcolor = 'gray';
      shiming === 1 ? btnArr[0].bgcolor = '#f2826a' : btnArr[0].bgcolor = 'gray';
      idcard === 1 ? btnArr[0].bgcolor = '#f2826a' : btnArr[0].bgcolor = 'gray';
    },
    btnType (type, text) {
      const btn = this.btn;
      switch (type) {
        case 1:
          [btn.text, btn.disable] = [text, false];
          break;
        case 2:
          [btn.text, btn.btn.disable] = [text, false];
          break;
        default:
          break;
      }
    },
    handleStep (stepObj) {
      const stepArr = [];
      if (stepObj === false) {
        stepArr.push(stepObj);
      } else {
        stepObj.step_desc.map((item, i) => {
          stepObj.step_img.map(it => {
            stepArr[i] = { text: item, img: it };
          });
        });
      }
      console.log(stepArr);
      return stepArr;
    },
    handleImg (imgpath) {
      if (imgpath === false) {
        this.hostImg = 'https://img.yzcdn.cn/vant/cat.jpeg';
      } else {
        this.hostImg = `${this.baseUrl}${imgpath}`;
      }
    }
  }
};
</script>

<style scoped lang="less" >
@bgcolor: #f7f7f8;
@fontsize: 16px;
@color: red;
@width: 310px;
@pdleft: 12px;
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
  position: relative;
  .roll {
    background-color: #f7f7f8;
    font-size: @fontsize+2px;
    padding-bottom: 50px;
    .msg {
      font-size: @fontsize - 2px;
      background-color: white;
      margin-bottom: 12px;
      .task {
        padding: 12px 24px 0px 12px;
        .top {
          display: flex;
          justify-content: space-between;
          .name {
            font-weight: bold;
          }
          .money {
            font-size: @fontsize - 1px;
            color: orange;
          }
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          padding: 10px 30px 10px 0px;
          color: rgb(152, 152, 152);
          font-size: @fontsize - 3px;
        }
      }
      .discribe {
        padding: 12px 12px;
        .title {
          font-weight: bold;
        }
      }
    }
    .main {
      padding: 6px @pdleft 6px @pdleft;
      background-color: #fff;

      margin-bottom: 2px;
      .top {
        font-size: @fontsize - 2px;
        font-weight: bold;
        padding: 6px 0px 6px 0px;
      }
      .bottom {
        display: flex;
        align-items: center;
        .name {
          display: inline-block;
          margin-left: 12px;
          font-size: @fontsize - 1px;
          font-weight: bold;
        }
      }
    }
    .check {
      padding: 10px @pdleft 10px @pdleft;
      background-color: #fff;
      .top {
        font-size: @fontsize - 2px;
        font-weight: bold;
      }
      .center2 {
        padding: 10px 40px 10px 8px;
        display: flex;
        justify-content: space-between;
      }
      .bottom {
        display: flex;
        align-items: center;
        .url {
          width: 65%;
          height: 36px;
          box-sizing: border-box;
          margin-right: 12px;
          display: inline-block;
          background-color: #f2f2f2;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #afafaf;
          .centerBox();
        }
      }
    }
    .imgs {
      padding-bottom: 34px;
      background-color: #fff;
      .imgbox {
        padding: 12px 12px 0px 12px;
        // background-color: #fff;
        text-align: center;
        .stepTitle {
          padding-bottom: 12px;
          font-size: 15px;
          font-weight: bold;
        }
        .emptyTitle {
          padding-bottom: 12px;
          font-size: 16px;
          text-align: center;
          color: #afafaf;
        }
      }
    }
  }
  .fix-btn {
    height: 32px;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    text-align: center;
    padding: 8px 16px 24px 16px;
    background-color: #fff;
  }
}
</style>
