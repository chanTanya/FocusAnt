<template>
  <div class="modification">
    <sublevel-nav @click="save" :right="true" />
    <van-field
      v-if="title === infoType.nickname || infoType.location"
      v-model="text"
      :placeholder="`请输入你的${title}`"
    />
    <van-field
      v-else-if="title === infoType.phone"
      v-model="text"
      type="tel"
      :placeholder="`请输入你的${title}`"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      infoType: {
        nickname: '昵称',
        phone: '手机',
        location: '收获地址'
      }
    };
  },
  computed: {
    title() {
      return this.currentInfo.title;
    }
  },
  methods: {
    save() {
      // console.log('text :', this.text);
      this.$emit('save', this.text);
    }
  },
  created() {
    this.$route.meta.title = `修改${this.currentInfo.title}`;
    this.text = this.currentInfo.value;
  },
  props: {
    currentInfo: {
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>
.modification {
  width: 100%;
  height: 100vh;
  // position: fixed;
  background-color: #fff;
  .van-cell {
    background-color: #f2f3f5;
  }
}
</style>
