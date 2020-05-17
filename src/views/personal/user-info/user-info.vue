<template>
  <div class="user-info">
    <div class="info" v-if="this.$route.path === '/userinfo'">
      <sublevel-nav />
      <van-cell-group>
        <van-cell title="个人头像" is-link>
          <template #default>
            <span class="user-avatar">
              <img src="" alt="" />
            </span>
          </template>
        </van-cell>
        <van-cell
          title="昵称"
          value="XXX"
          is-link
          @click="toChange('昵称', 'xxx')"
        />
        <van-cell
          title="性别"
          :value="userInfo.sex"
          is-link
          @click="showsexPicker = true"
        />
        <van-cell
          title="手机"
          value="XXX"
          is-link
          @click="toChange('手机', 'xxx')"
        />
        <van-cell
          title="生日"
          :value="dateFormat(userInfo.birthday)"
          is-link
          @click="showdatePicker = true"
        />
        <van-cell
          title="收货地址"
          value="XXX"
          is-link
          @click="toChange('收获地址', 'xxx')"
        />
      </van-cell-group>
    </div>
    <router-view :currentInfo="currentInfo" @save="save" v-else />
    <van-popup v-model="showsexPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showsexPicker = false"
        @confirm="sexChange"
      />
    </van-popup>
    <van-popup v-model="showdatePicker" position="bottom">
      <van-datetime-picker
        type="date"
        v-model="userInfo.birthday"
        @confirm="dateChange"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </van-popup>
  </div>
</template>

<script>
import SublevelNav from '@/components/sublevel-header/sublevel-header';
export default {
  name: 'userInfo',
  data() {
    return {
      showsexPicker: false,
      showdatePicker: false,
      columns: ['男', '女'],
      minDate: new Date(1930, 0, 1),
      maxDate: new Date(),
      userInfo: {
        birthday: new Date('1997-06-26'),
        sex: '男'
      },
      currentInfo: {
        title: '',
        value: ''
      }
    };
  },
  components: {
    SublevelNav
  },
  methods: {
    sexChange(sex) {
      this.userInfo.sex = sex;
      this.showsexPicker = false;
    },
    dateChange(date) {
      this.showdatePicker = false;
      this.userInfo.birthday = date;
    },
    dateFormat(date) {
      const symbl = '/';
      return date.toLocaleDateString().replace(new RegExp(symbl, 'g'), '-');
    },
    save(text) {
      console.log('text :', text);
    },
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      } else if (type === 'month') {
        return `${val}月`;
      } else {
        return `${val}日`;
      }
      // return val;
    },
    toChange(name, value) {
      this.currentInfo.title = name;
      this.currentInfo.value = value;
      this.$router.push('/userinfo/modification');
    }
  }
};
</script>

<style lang="less">
.user-info {
  width: 100%;
 min-height: 100vh;
  // position: fixed;
  .van-cell {
    align-items: center;
  }
  .van-cell-group {
    margin-top: 10px;
  }
  .user-avatar {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: #999;
    border-radius: 50%;
  }
}
</style>
