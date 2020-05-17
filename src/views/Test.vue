<template>
  <div class="container">
    <van-tabs v-model="active">
      <van-tab
        v-for="(item, name, index) in tabs"
        :key="index"
        :title="item[0].title"
        :name="item[0].name"
      >
        <van-list
          v-model="loading[index]"
          @load="onLoad(index)"
          :finished="finished[index]"
          finished-text="没有更多了"
        >
          <van-cell v-for="(li, i) in item" :key="i" :title="li.name" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
// import BaseFooterNav from '@/components/BaseFooterNav.vue';
export default {
  name: '',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
    // BaseFooterNav
  },
  data() {
    return {
      active: '营销指南',
      list: [],
      loading: [false, false],
      finished: [false, false],
      allLoaded: [false, false, false],
      tabs: {
        list0: [{ title: '如营销技巧', name: '营销指南' }],
        list1: [
          { title: '零零零零', name: '团队管理' },
          { title: '', name: '团队管理' }
        ]
      }
    };
  },
  computed: {
    // userId: function () { return this.store.state.personMsg.id }
  },
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 更新之后
  updated() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  beforeDestroy() {},
  methods: {
    onLoad(type) {
      const func = `this.loadList${type}()`;
      // eslint-disable-next-line no-eval
      eval(func); // 执行func_abc()函数
    },
    // @load
    async loadList(type) {
      // type跟ip建立映射
      if (this.allLoaded === false) {
        // 异步更新数据
        // await axiosList(ip,type)
        // 一页加载结束
        // this.loading[type] = false;
      } else {
        // 如果数据全部加载完成
        //  this.finished[type] = true;
      }
    },
    axiosList(ip, type) {
      // get默认路径传参，不用qs
      this.axios
        .get('ip', {
          params: {}
        })
        .then(res => {
          console.log('post success');
          console.log(res);
          // if (res.data) {
          //  数据填充
          // data.map((item)=>{
          //  this.tabs.list[type].push(item);
          // })
          // } else {
          // 数据加载完毕
          //   this.allLoaded=true
          // }
        })
        .catch(function(error) {
          alert(error);
        });
    },
    loadList0() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.tabs.list0.push({ title: '如营销技巧', name: '营销指南' });
        }
        // 加载状态结束
        this.loading[0] = false;
        // 数据全部加载完成
        if (this.tabs.list0.length >= 40) {
          this.finished[0] = true;
        }
      }, 1000);
    },
    loadList1() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.tabs.list1.push({ title: '如营销技巧', name: '营销指南' });
        }
        // 加载状态结束
        this.loading[1] = false;

        // 数据全部加载完成
        if (this.tabs.list1.length >= 40) {
          this.finished[1] = true;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped lang="less">
.container {
}
</style>
