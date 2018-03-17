//ES6 其他常用功能

// let 可以定义变量，这个let定义的变量可以被重新赋值
// const 可以定义常量，这个const定义的常量不可以被重新赋值
var i = 10;
i = 100;
var j = 20;
j = 200;
console.log(i); //100
console.log(j); //200

let k = 30;
k = 300;
const v = 40;
// v = 400; 报错 Uncaught TypeError: Assignment to constant variable.
console.log(k); //300
console.log(v); //40

// 多行字符串
var name = 'clm',
  age = 32,
  html = '';
html += '<div>';
html += ' <p>多行字符串</p>';
html += ' <p>' + name + '</p>';
html += ' <p>' + age + '</p>';
html += '</div>'
document.getElementById('dh_Zfc').innerHTML = html;

//模板变量 反引号 ``
const newName = 'limin',
  newAge = 33;
const newHtml = `
    <div>
      <p>模板变量</p>
      <p>${newName}</p>
      <p>${newAge}</p>
    </div>`;
document.getElementById('mb_Zfc').innerHTML = newHtml;

// 解构赋值
var obj = {
  a: 100,
  b: 200
};
var a = obj.a;
var b = obj.b;
console.log(a); //100
console.log(b); //200
var arr = ['xxx', 'yyy', 'zzz'];
var x = arr[0];
var y = arr[1];
var z = arr[2];
console.log("x=" + x + "y=" + y + "z=" + z); //x=xxxy=yyyz=zzz

//解构赋值ES6写法
//解构赋值先把后面的集合给解开，然后分别赋值给变量中
const objES6 = {
  aES6: 100,
  bES6: 200
};
const {aES6, bES6} = objES6;
console.log(aES6, bES6); //100 200
const arrES6 = ['xxx', 'yyy', 'zzz'];
const [xES6, yES6, zES6] = arrES6;
console.log(xES6, yES6, zES6); //xxx yyy zzz

//块级作用域
var objNEW = {
  a: 100,
  b: 200
};
//不推荐把var item 写在循环里面.
//推荐把var item 写在循环外面.
var item;
for (item in objNEW) {
  console.log(item); //a b
}
console.log(item); //b

// ES6块级作用域
const objNEWES6 = {
  a: 100,
  b: 200
};
for (let itemES6 in objNEWES6) {
  console.log(itemES6); // a b
}
// console.log(itemES6);//报错 itemES6 is not defined

// 函数默认参数
function fn(a1, b2) {
  if (b2 == null) {
    b2 = 0;
  }
}
// 函数默认参数ES6写法
function fnES6(a1,b2=0){
  // 通过babel编译后的结果原理
  // var b2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
}

// 箭头函数
var arrPT = [1,2,3];
var newArrPT = arrPT.map(function(item){
  return item + 1;
});
console.log(newArrPT);//[2, 3, 4]

// 箭头函数ES6写法
const arrJTES6 = [1,2,3];
//只有一个参数 item 不用括号
//函数体只有一行 item + 1
const arrNEW1_JTES6 = arrJTES6.map(item => item + 1);
console.log(arrNEW1_JTES6);// [2, 3, 4]

//但两个参数 item,index 需要括号
//函数体多行 console.log(item); return item+1;
arrJTES6.map((item,index) => {
  console.log(item);
  return item+1;
});
