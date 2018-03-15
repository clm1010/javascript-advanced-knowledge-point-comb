// promist语法

function loadImg(src) {
  // 声明Promise实例
  const promise = new Promise(function(resolve, reject) {
    var img = document.createElement('img');
    img.onload = function() {
      // resolve解决
      resolve(img);
    }
    img.onerror = function() {
      // reject拒绝
      reject();
    }
    img.src = src;
  })

  //返回实例
  return promise
}

var src = 'https://www.imooc.com/static/img/index/logo.png';
var result = loadImg(src);

result.then(function(img) {
  console.log(img.width)
}, function() {
  console.log('failed')
})

result.then(function(img) {
  console.log(img.height)
}, function() {
  console.log('failed')
})
