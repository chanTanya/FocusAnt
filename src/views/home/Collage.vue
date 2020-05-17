<template>
  <div class="container">
    <van-nav-bar title="介绍详情" left-arrow @click-left="nextPage()" />
    <h1>{{res.title}}</h1>
    <div class="p">
      <pre class="pre" v-html="res.content">
        <!-- 因为后台返回的数据可能是' 文本'或者 '<p> 文本'</p> -->
        <!-- 所以需要同时使用v-html和pre属性 -->
        <!-- 所以pre标签设置换行，且pre>p设置换行 -->
      </pre>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'Collage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // HelloWorld
  },
  data () {
    return {
      html: '<img src="https://img.yzcdn.cn/vant/cat.jpeg">',
      id: this.$route.params.id,
      res: {},
      head: { title: '产品介绍', content: '<p>打算踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩啊啊啊啊啊啊啊啊啊啊啊pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>' }
    };
  },
  computed: {
    // userId: function () { return this.store.state.personMsg.id }
  },
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    console.log(this.$route.params.id);
    this.onLoad();
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
  // 生命周期 - 更新之后
  updated () { },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated () { },
  beforeDestroy () { },
  methods: {
    nextPage () {
      this.$router.go(-1);
    },
    async onLoad () {
      const { id } = this;
      const res = await this.$api.collageDetail({ id: id });
      // const [data, vm] = [res.data.info, this];
      console.log(res);
      this.res = res.data.info;
      // [vm.resdata, vm.example, vm.step] = [data, data.tushi, vm.handleStep(data.step_info)];
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
.container {
  height: 750px;
  background-image: linear-gradient(180deg, #90c1fd 0%, #ffffff 100%),
    linear-gradient(90deg, #90c1fd 0%, #ffffff 90%);
  background-blend-mode: normal, normal;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  h1 {
    margin: 20px 0;
    font-size: 16px;
    // text-align: center;
    padding-left: 6%;
    padding-right: 6%;
  }
  .p {
    min-height: 60px;
    width: 84%;
    margin: 0 auto;
    background-color: #fff;
    margin-bottom: 24px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 0px 12px;
    .title {
      font-size: 15px;
      letter-spacing: 0px;
      color: #000000;
    }
    .pre {
      // min-height: 40px;
      font-size: 14px;
      color: #7b7b7b;
      word-break: break-all;
      white-space: pre-line;
      font-weight: 500;
      // p {
      //   word-break: break-all;
      //   white-space: pre-line;
      // }
    }
  }
}
// pre > p {
//   word-break: break-all;
//   white-space: pre-line;
// }
</style>
