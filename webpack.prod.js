const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'webpack.js',
    path: path.resolve(__dirname, 'dist')
  }
};