import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 创建Vue 构造函数

// 此处不用 class 的原因是因为方便后续给 Vue 实例混入实例成员
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 调用 _init()方法
  this._init(options)
}

// 给Vue的原型上混入一些成员属性或者方法,,, 实际是设置Vue 实例成员
// -----------------------------------------------------------------------------------

// 注册 vm的 _init() 方法,初始化 vm
initMixin(Vue)

// 注册vm的$data/$props/$set/$delete/$watch
stateMixin(Vue)

// 初始化事件相关方法
// $on/$once/$off/$emit
eventsMixin(Vue)

// 初始化生命周期相关混入方法
// _update/$forceUpdate/$destroy
lifecycleMixin(Vue)

// 混入render
// $nextTick/_render 
renderMixin(Vue)

export default Vue
