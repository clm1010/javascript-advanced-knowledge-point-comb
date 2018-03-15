// promise-callback-hell
// 这种方法不太友好需要写很多
function loadImg(src, callback, fail) {
  var img = document.createElement('img');
  img.onload = function() {
    callback(img);
  }
  img.onerror = function() {
    fail();
  }
  img.src = src;
}

var src = 'https://www.imooc.com/static/img/index/logo.png';
loadImg(src, function(img) {
  console.log(img.width);
}, function() {
  console.log('failed')
})
