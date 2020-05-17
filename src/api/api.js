import service from './http';

// 登录
export const login = loginBody => {
  return service.post('/Home/Public/login.html', loginBody, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  });
};

// 注册
export const register = registerBody => {
  return service.post('/Home/Public/reg.html', registerBody, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  });
};

// 首页, 无参数
export const home = () => {
  return service.get('/Home/Index/index');
};

// 任务大厅
export const task = (reqBody) => {
  return service.get('/Home/Index/task', { params: reqBody });
};

// 任务详情 有参数
export const taskDetail = reqBody => {
  return service.get('/Home/Task/show', { params: reqBody });
};

// 营销学院详情 有参数
export const collageDetail = reqBody => {
  return service.get('/Home/Index/newDetail', { params: reqBody });
};
