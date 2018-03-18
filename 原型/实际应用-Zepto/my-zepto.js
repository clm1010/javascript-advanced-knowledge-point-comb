;
(function(window) {

  var zepto = {}

  //Z构造函数
  function Z(dom, selector) {
    var i;
    //如果dom是个数组
    var len = dom ? dom.length : 0 ;
    for(i = 0; i< len; i++){
      //把dom数组中的每个元素复制到this的属性中
      this[i] = dom [i];
    }
    this.length = len;
    this.selector = selector || '';
  }

  zepto.Z = function(dom, selector) {
    return new Z(dom, selector);
  }

  //第二步 执行zepto.init
  zepto.init = function(selector) {
    //获取数组原型中的slice
    var slice = Array.prototype.slice;
    //document.querySelectorAll(selector)出来的是类数组不是一个完整数组的形式
    //通过slice.call() 转换为绝对数组的形式 放入 dom变量中
    var dom = slice.call(document.querySelectorAll(selector));
    // var dom1 = document.querySelectorAll(selector);
    // console.log(JSON.stringify(dom));//[{},{},{},{}] 通过slice.call() 转换为绝对数组的形式
    // console.log(JSON.stringify(dom1));//{"0":{},"1":{},"2":{},"3":{}} 对象形式
    //第三步 走到zepto.Z这个构造函数中
    return zepto.Z(dom, selector);
  }

  var $ = function(selector) {
    //第一步 首先走到zepto.init中
    return zepto.init(selector);
  }

  window.$ = $;


  $.fn = {
    css : function (key, value) {
      console.log('css');
    },
    html: function (value) {
      return '这是一个模拟的 html 函数';
    }
  }

  //构造函数的原型  Z.prototype复制成了$.fn
  Z.prototype = $.fn;
})(window);
