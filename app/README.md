## 应用前端项目
这里介绍项目从零开始搭建的过程及相关说明

### 项目选型
本打算学习Cycle.js用Cycle来搭建项目，但介于无法作为SPA来开发及其他问题遂选用React+Mobx+Antd来开发

### 安装依赖

#### dependencies
`npm i react react-dom antd classnames`

#### devDependencies
`npm i cross-env autoprefixer rucksack-css -D`

#### webpack
```
npm i webpack webpack-dev-server -D
npm i sass-loader node-sass postcss-loader style-loader react-hot-loader -D
npm i html-webpack-plugin webpack-bundle-analyzer webpack-dashboard prepack-webpack-plugin extract-text-webpack-plugin -D
```

#### babel
```
npm i babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 -D
```

#### eslint
```
npm i eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D
```

> eslint-config-airbnb是eslint的3种配置包之一，有Google标准、Airbnb标准和Standard标准
> eslint-config-airbnb此外还需要eslint-plugin-import、eslint-plugin-jsx-a11y两个Airbnb标准必需包



