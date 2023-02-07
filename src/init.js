
import { initState } from "./state"
// 就是给Vue增加init方法
export function initMixin() {
    // 用于初始化操作
    Vue.prototype._init = function (options) {
        // 我们使用vue的实时， $nextTick 等等 都是私有属性
        const vm = this
        vm.$options = options // 将用户的选项挂载到实例上

        // 初始化状态
        initState(vm)
    }
}

