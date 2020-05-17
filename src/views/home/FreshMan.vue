<template>
  <div class="container">
    <h1>新手入门相关帮助指南</h1>
    <div class="p">
      <p class="title">产品介绍</p>
      <pre class="pre" v-html="head.content">
        <!-- 因为后台返回的数据可能是' 文本'或者 '<p> 文本'</p> -->
        <!-- 所以需要同时使用v-html和pre属性 -->
        <!-- 所以pre标签设置换行，且pre>p设置换行 -->
      </pre>
    </div>
    <div class="p" v-for="item in list" :key="item.id">
      <p class="title">{{item.title}}</p>
      <pre class="pre" v-html="item.content">
      </pre>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'FreshMan',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // HelloWorld
  },
  data () {
    return {
      head: { title: '产品介绍', content: '打算踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩啊啊啊啊啊啊啊啊啊啊啊pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp' },
      list: [
        { title: '如何上路', content: '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>' },
        { title: '如何上路', content: '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>' },
        { title: '如何上路', content: '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>' }
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

.container {
  height: 100%;
  background-image: linear-gradient(180deg, #90c1fd 0%, #ffffff 100%),
    linear-gradient(90deg, #90c1fd 0%, #ffffff 90%);
  background-blend-mode: normal, normal;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 20px 0;
    font-size: 15px;
  }
  .p {
    min-height: 60px;
    width: 84%;
    background-color: #fff;
    margin-bottom: 24px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 10px 18px;
    .title {
      font-size: 15px;
      letter-spacing: 0px;
      color: #000000;
    }
    pre {
      padding-top: 6px;
      // min-height: 40px;
      font-size: 14px;
      color: #7b7b7b;
      word-break: break-all;
      white-space: pre-line;
      letter-spacing: 1px;
      font-weight: 500;
      p {
        word-break: break-all;
        white-space: pre-line;
      }
    }
  }
}
// pre > p {
//   word-break: break-all;
//   white-space: pre-line;
// }
</style>
