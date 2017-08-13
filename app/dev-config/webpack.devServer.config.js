const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const fs = require('fs-extra');
// 默认是开发时配置
const config = require('./webpack.config.js');
const appsConfig = require('./apps.config.js');

const port = appsConfig.devServer.port;
const proxy = appsConfig.proxy;

new WebpackDevServer(webpack(config), {
  // 设置 WebpackDevServer 的开发目录，默认为当前项目的根目录
  contentBase: path.join(__dirname, '../public'),
  publicPath: '/',
  proxy,
  // 其他配置项
  compress: true,
  hot: true,
  historyApiFallback: true,
  quiet: true,
  noInfo: true,
  stats: { colors: true },
  disableHostCheck: true,
}).listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.log(err);
  }
  // 复制文件
  fs.copy(
    path.resolve(__dirname, './page/dev.html'),
    path.resolve(__dirname, '../public/index.html')
  );
  return console.log(`Listening at http://0.0.0.0:${port}/`);
});
