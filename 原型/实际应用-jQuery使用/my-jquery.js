;(function(window){
  var jQuery = function(selector) {
    //注意 new 关键字，第一步就找到了构造函数
    return new jQuery.fn.init(selector);
  }

  //构造函数原型
  jQuery.fn = {
    css: function (key, value) {
      console.log('css');
    },
    html: function (value) {
      return '这是一个模拟的 html 函数';
    }
  }

  //定义构造函数
  var init = jQuery.fn.init = function (selector) {
    var slice = Array.prototype.slice;
    var dom = slice.call(document.querySelectorAll(selector));

    var i, len = dom ? dom.length : 0;
    for(i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || '';
  }



  //定义构造函数原型
  init.prototype = jQuery.fn;

  window.$ = jQuery;
})(window)
