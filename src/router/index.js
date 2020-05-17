import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';
// import Task from '../views/task/Task.vue';
Vue.use(VueRouter);

VueRouter.prototype.goBack = function() {
  this.isBack = true;
  window.history.go(-1);
};
const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/about',
    name: 'About',

    meta: {
      hideFooter: true,
      hideHeader: true,
      title: '关于我们'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/personal/about/about.vue'
      )
  },
  {
    path: '/home',
    name: 'Home',
    meta: { title: '首页' },
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    meta: { title: '测试页' },
    component: () => import('../views/Test.vue')
  },
  {
    path: '/integral',
    name: 'Integral',
    meta: { title: '积分' },
    component: () => import('../views/integral/integral.vue')
  },
  {
    path: '/home/collage/:id',
    name: 'Collage',
    meta: { hideHeader: true, hideFooter: true, title: '营销学院' },
    component: () => import('../views/home/Collage.vue')
  },
  {
    path: '/home/freshman',
    name: 'FreshMan',
    meta: { title: '新手上路' },
    component: () => import('../views/home/FreshMan.vue')
  },
  {
    path: '/home/vipcenter',
    name: 'VipCenter',
    meta: { title: '会员中心' },
    component: () => import('../views/home/VipCenter.vue')
  },
  {
    path: '/task',
    name: 'Task',
    meta: { title: '任务大厅', footerBtn: true },
    component: () => import('../views/task/Task.vue')
  },
  {
    path: '/task/detail/:id',
    name: 'TaskDetail',
    meta: { hideHeader: true, hideFooter: true, title: '任务详情' },
    component: () => import('../views/task/TaskDetail.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    meta: { title: '个人中心', hideHeader: true },
    component: () => import('../views/personal/personal.vue')
  },
  {
    path: '/myteam',
    name: 'MyTeam',
    meta: {
      hideFooter: true,
      hideHeader: true,
      title: '我的团队'
    },
    component: () => import('../views/personal/my-team/my-team.vue')
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    meta: {
      hideHeader: true,
      hideFooter: true,
      title: '个人信息'
    },
    children: [
      {
        path: 'modification',
        meta: { hideHeader: true, hideFooter: true, title: '修改' },
        component: () =>
          import('../views/personal/modification/modification.vue')
      }
    ],
    component: () => import('../views/personal/user-info/user-info.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { hideHeader: true, hideFooter: true },
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/retrieve',
    name: 'Retrieve',
    meta: { hideHeader: true, hideFooter: true },
    component: () => import('../views/retrieve/retrieve.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { hideHeader: true, hideFooter: true },
    component: () => import('../views/register/register.vue')
  },
  {
    path: '/earning',
    name: 'Earning',
    meta: { title: '收益中心' },
    component: () => import('../views/earning/earning.vue')
  },
  {
    path: '/service',
    name: 'Service',
    meta: { hideFooter: true, hideHeader: true, title: '客服' },
    component: () => import('../views/personal/service/service.vue')
  },
  {
    path: '/invite',
    name: 'Invite',
    meta: { hideHeader: true, hideFooter: true, title: '邀请好友' },
    component: () => import('../views/personal/invite/invite.vue')
  },
  {
    path: '/feedback',
    name: 'FeedBack',
    meta: { hideHeader: true, hideFooter: true, title: '反馈与投诉' },
    component: () => import('../views/personal/feedback/feedback.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
