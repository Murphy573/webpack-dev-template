const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  resolve: {
    // 扩展名:配置之后引用文件可以省略
    extensions: [' ', '.js', '.jsx', '.vue', '.json', '.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
