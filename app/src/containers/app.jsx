/* eslint class-methods-use-this: ["error", { "exceptMethods": ["foo"] }] */

import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';
import Login from './login';
import stores from '../stores';

@observer
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Login />
      </Provider>
    );
  }
}
