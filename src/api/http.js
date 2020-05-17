import axios from 'axios';
import { Toast } from 'vant';
// import { message } from 'ant-design-vue';
// import state from '../store/state';
/*
 * 跳转登录页
 */

// const baseURL = "/api";
const baseURL = '/api';

const service = axios.create({
  baseURL,
  headers: {
    get: {
      // get请求头配置
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      // post请求头配置
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  timeout: 30000
});
// 请求拦截
service.interceptors.request.use(
  config => {
    // if (state.user.token) {
    //   config.headers = {
    //     token: state.user.token
    //   };
    // }
    // 可在此添加loading
    return config;
  },
  error => {
    // 对错误进行相应
    console.log(error);
    return Promise.resolve(error);
  }
);
const showStatus = {
  0: info => {
    Toast(info);
  },
  1: () => {
    return false;
  }
};
// 响应拦截
service.interceptors.response.use(
  res => {
    // if (status < 200 || status >= 300) {
    //   // 处理http错误,
    //   showStatus(data.errno);
    // }
    const {
      data: { info, status }
    } = res;
    if (info) {
      showStatus[status](info);
    }
    return res;
  },
  error => {
    return Promise.resolve(error);
  }
);

// const notify = (type, msg, duration = 3) => {
//   message[type](msg, duration);
// };
export default service;
