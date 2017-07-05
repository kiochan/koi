var path = require('path');

module.exports = {
  entry: './build/tsc-temp/Main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};