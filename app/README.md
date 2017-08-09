## 应用前端项目
这里介绍项目从零开始搭建的过程及相关说明

### 项目选型
本打算学习Cycle.js用Cycle来搭建项目，但介于无法作为SPA来开发及其他问题遂选用React+Mobx+Antd来开发

### 安装依赖

#### dependencies
- react
- react-dom
- react-router
- mobx
- antd
- classnames

#### devDependencies
- fs-extra
- better-npm-run(兼容平台的命令行工具)

#### postcss
- cssnano
- autoprefixer 
- rucksack-css

#### webpack
- webpack
- webpack-dev-server

##### loader
- sass-loader
- node-sass
- postcss-loader
- style-loader
- react-hot-loader("^3.0.0-beta.6")

##### plugin
- html-webpack-plugin
- webpack-dashboard(友好的展示webpack运行的命令行工具)
- webpack-bundle-analyzer(可视化webpack的打包依赖的体积)
- prepack-webpack-plugin
- webpack-visualizer-plugin(生成文件展示引用模块占比)
- extract-text-webpack-plugin(提取css样式)）
- happypack(加速代码构建)

#### babel
- babel-core
- babel-eslint
- babel-loader

##### preset
- babel-preset-env
- babel-preset-es2015
- babel-preset-react
- babel-preset-stage-0

##### plugin
- babel-plugin-import
- babel-plugin-transform-runtime(供编译模块复用工具函数)
- babel-plugin-async-to-promises
- babel-plugin-transform-decorators-legacy

#### eslint
- eslint
- eslint-config-airbnb
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react

> eslint-config-airbnb是eslint的3种配置包之一，有Google标准、Airbnb标准和Standard标准
> eslint-config-airbnb此外还需要eslint-plugin-import、eslint-plugin-jsx-a11y两个Airbnb标准必需包



