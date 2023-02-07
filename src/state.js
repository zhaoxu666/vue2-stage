import { observe } from "./observe/index"

export function initState(vm) {
    // 获取所有的选项
    const opts = vm.$options
    if (opts.data) {
      initData(vm)
    }
  }
  
  function initData (vm) {
      // data 可能是函数和对象
    let data = vm.$options.data
    data = typeof data === 'function'? data.call(vm) : data
    
    // 对数据进行劫持 vue2里采用了一个api defineProperty
    observe(data)

  }