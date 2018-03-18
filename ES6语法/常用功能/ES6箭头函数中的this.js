// ES6中的this

function es6fn() {
  console.log('es6-real', this);//es6-real {a: 100}
  var es6Arr = [1, 2, 3];
  es6Arr.map(item => {
    console.log(this);//这时候的this,指向{a: 100}
  })
}
es6fn.call({a:100});
