import React from 'react';
import App from './containers/app';
import render from './utils/render';

// 将组件渲染到DOM中
render(<App />, document.getElementById('root'), './containers/App');
