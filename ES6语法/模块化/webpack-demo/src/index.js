import util1 from './util1.js'
import { fn1, fn2 } from './util2.js'

console.log(util1)
fn1()
fn2()

// [1, 2, 3].map(item => item + 1)

//执行命令 javascript-advanced-knowledge-point-comb\ES6语法\模块化\babel-new-part>babel src/index.js

// 生成ES5语法
// "use strict";
//
// [1, 2, 3].map(function (item) {
//   return item + 1;
// });
