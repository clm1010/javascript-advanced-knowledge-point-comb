// JS继承
// 定义抽象的Animal构造函数
function Animal() {
  this.eat = function () {
    console.log('Animal eat');
  }
}
// 定义Dog低级构造函数
function Dog() {
  this.bark = function() {
    console.log('Dog bark');
  }
}

//绑定原型，实现继承
Dog.prototype = new Animal();

var hashiqi = new Dog();
hashiqi.bark(); //Dog bark
hashiqi.eat(); //Animal eat
