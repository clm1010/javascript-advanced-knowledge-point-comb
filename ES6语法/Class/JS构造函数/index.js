// 定义构造函数
function MathHandle(x, y) {
  this.x = x
  this.y = y
}

// 原型定义add方法
MathHandle.prototype.add = function() {
  return this.x + this.y
}

var m = new MathHandle(1, 2)
// console.log(m.add())
document.getElementById('test').innerHTML = m.add()
