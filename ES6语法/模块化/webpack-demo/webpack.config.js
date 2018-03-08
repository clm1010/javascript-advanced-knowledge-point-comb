
module.exports = {
  // 入口
  entry: './src/index.js',
  // 输出
  output: {
    path:__dirname,
    filename:'./build/bundle.js'
  },
  // 模块
  module: {
    // 规则
    rules: [
      {
        test:/\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}
