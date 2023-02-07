(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var Observer = /*#__PURE__*/function () {
    function Observer(data) {
      _classCallCheck(this, Observer);
      // Object.defineProperty只能劫持已经存在的属性，后增的，删除的不知道 （vue里面会为此单独写一些api $set $delete）
      this.walk(data);
    }
    _createClass(Observer, [{
      key: "walk",
      value: function walk(data) {
        // 循环对象，对属性依次劫持
        // 重新定义属性
        Object.keys(data).forEach(function (key) {
          return defineReactive(data, key, data[key]);
        });
      }
    }]);
    return Observer;
  }();
  function defineReactive(target, key, value) {}
  function observe(data) {
    // 对这个对象进行劫持
    if (_typeof(data) !== 'object' || data == null) {
      return; // 只对对象进行劫持
    }

    // 如果一个对象被劫持过了，那就不需要再被劫持了（要判断一个对象是否被劫持过，可以增添一个实例，用实例来判断是否被劫持过）
    return new Observer(data);
  }

  function initState(vm) {
    // 获取所有的选项
    var opts = vm.$options;
    if (opts.data) {
      initData(vm);
    }
  }
  function initData(vm) {
    // data 可能是函数和对象
    var data = vm.$options.data;
    data = typeof data === 'function' ? data.call(vm) : data;

    // 对数据进行劫持 vue2里采用了一个api defineProperty
    observe(data);
  }

  // 就是给Vue增加init方法
  function initMixin() {
    // 用于初始化操作
    Vue.prototype._init = function (options) {
      // 我们使用vue的实时， $nextTick 等等 都是私有属性
      var vm = this;
      vm.$options = options; // 将用户的选项挂载到实例上

      // 初始化状态
      initState(vm);
    };
  }

  function Vue$1(options) {
    this._init(options);
  }

  // 扩展了init方法
  initMixin();

  return Vue$1;

}));
//# sourceMappingURL=vue.js.map
