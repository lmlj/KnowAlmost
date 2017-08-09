const path = require('path');

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development';

const baseAlias = {
  color: path.join(__dirname, './app/styles/_color.scss'),
};

const buildAlias = {
};

module.exports = {
  alias: __DEV__ ? baseAlias : Object.assign({}, baseAlias, buildAlias),
  extensions: ['.js', '.jsx', '.scss'],
};
