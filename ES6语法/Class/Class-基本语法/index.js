//语法糖
//这里的 class MathHandle相当于function MathHandle 本质是个function
//constructor 构造器
class MathHandle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  //add()相当于 MathHandle.prototype.add 原型定义
  add(){
    return this.x + this.y;
  }
}

const m = new MathHandle(1,2);
// console.log(m.add());
document.getElementById('test').innerHTML = m.add();

console.log(typeof MathHandle) //function

//MathHandle的显示原型(prototype)里面有一个constructor构造函数属性 ===  MathHandle它的本身
//函数都有显示原型
console.log(MathHandle.prototype.constructor === MathHandle ) //true

// m是new出来的一个实例，所有的对象都有一个__proto__隐式原型
// m的(__proto__)隐式原型等于MathHandle的(prototype)显示原型
console.log(m.__proto__ === MathHandle.prototype) //true
