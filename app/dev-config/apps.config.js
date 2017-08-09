/**
 * Created by apple on 16/6/8.
 */
const defaultIndexPage = './dev-config/page/template.html';

module.exports = {
  // 基本的应用配置信息
  apps: [
    {
      id: 'index',
      src: './src/index.jsx',
      indexPage: defaultIndexPage,
      compiled: true,
    },
  ],

  // 开发入口配置
  devServer: {
    appEntrySrc: './src/index.jsx', // 当前待调试的APP的入口文件
    port: 3000, // 监听的Server端口
  },

  // 依赖项配置
  proxy: {
    // 后端服务器地址 http://your.backend/
    '/api/*': 'http://localhost:3001',
  },

  // 后端 api 配置，这样配置可以避免将测试服务器端口暴露出去
  api: {
    dev: {},
    prod: {},
  },
};
