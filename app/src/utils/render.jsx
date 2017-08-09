import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// 判断当前是否处于开发状态下
const __DEV__ = (process.env.NODE_ENV || 'development') === 'development';

/**
 * @function 封装之后的渲染方法
 * @param App 待渲染的应用
 * @param rootElement
 * @param rootComponentPath
 */
export default (
  App,
  rootElement,
  rootComponentPath,
) => {
  // 如果是开发模式下
  if (__DEV__) {
    // 重定义渲染函数
    const render = (Component) => {
      ReactDOM.render(
        <AppContainer>{Component}</AppContainer>,
        rootElement
      );
    };

    render(App);

    // 热加载应用
    if (module && module.hot) {
      module.hot.accept(rootComponentPath, () => {
        render(App);
      });
    }
  } else {
    ReactDOM.render(App, rootElement);
  }
};
