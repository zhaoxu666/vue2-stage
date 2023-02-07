// rollup 默认可以导出一个对 作为打包的配置文件
import babel from 'rollup-plugin-babel'
export default {
    // 入口
    input: './src/index.js',
    // 出口
    output: {
        file: './dist/vue.js',
        // 在全局添加一个属性 global.Vue
        name: 'Vue',
        // esm es6模块 commonjs模块 iife自执行函数 umd(commonjs amd)
        format: 'umd' ,
        sourcemap: true
    },
    plugins: [
        babel({
            exclude: 'node_modules/**' // 排除node_modules所有文件
        })
    ]
}