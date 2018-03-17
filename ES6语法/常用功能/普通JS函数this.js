// 普通函数this

function fn(a,b){
  console.log('real',this);//real {a: 100}
  console.log(a,b) //1,2
  var arr = [1,2,3];
  arr.map(function(item){
    console.log(this);//这时候的this,指向window
  })
}
//call强制this指向{a:100}这个对象
//apply强制this指向{a:200}这个对象,后面是数组参数
fn.call({a:100},1,2);
fn.apply({a:200},[1,2]);
