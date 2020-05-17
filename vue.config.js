module.exports = {
  // lintOnSave: false,
  publicPath: './',
  chainWebpack: config => {
    // 路径自定义
    // config.resolve.alias.set('@public', resolve('public'));
    // 移除prefetch插件
    config.plugins.delete('prefetch');
  },
  css: {
    // css 预设器配置项
    loaderOptions: {
      css: {
        importLoaders: 1
      },
      less: {
        importLoaders: 1
      },
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 37.5,
            exclude: '/node_modules/vant'
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.jrfzb.cn',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
