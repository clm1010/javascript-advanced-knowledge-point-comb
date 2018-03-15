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
var name = 'clm',age = 32,html = '';
html += '<div>';
html += ' <p>多行字符串</p>';
html += ' <p>' + name + '</p>';
html += ' <p>' + age + '</p>';
html += '</div>'
document.getElementById('dh_Zfc').innerHTML = html;

//模板变量
const newName = 'limin',newAge=33;
const newHtml = `
    <div>
      <p>模板变量</p>
      <p>${newName}</p>
      <p>${newAge}</p>
    </div>`;
document.getElementById('mb_Zfc').innerHTML = newHtml;
