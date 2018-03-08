import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  // 入口
  input: './src/index.js',
  // 输出
  output: {
    file:'./build/bundle.js',
    // format: 'umd'格式umd 兼容AMD CommonJS 也兼容JS直接引入页面中
    format: 'umd'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
