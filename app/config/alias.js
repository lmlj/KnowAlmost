const production = process.env.NODE_ENV === 'production';

const getAlias = (path, __dirname) => {
  const baseAlias = {
    react: path.join(__dirname, './node_modules/react/dist/react.js'),
    redux: path.join(__dirname, './node_modules/redux/dist/redux.js'),
    'react-dom': path.join(__dirname, './node_modules/react-dom/dist/react-dom.js'),
    'react-router': path.join(__dirname, './node_modules/react-router/lib/index.js'),

    color: path.join(__dirname, './app/styles/_color.scss'),
  };

  const buildAlias = {
    react: 'react/dist/react.min.js',
    redux: 'redux/dist/redux.min.js',
    'react-dom': 'react-dom/dist/react-dom.min.js',
  };

  return production ? Object.assign({}, baseAlias, buildAlias) : baseAlias;
};

module.exports = getAlias;
