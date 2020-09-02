/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

// 定义patch函数, 类似于 snabbdom中的init  一个函数返回一个函数,  返回patch 函数
export const patch: Function = createPatchFunction({ nodeOps, modules })
