import Vue from 'vue'
import Router from 'vue-router'
import btn from './btn'

Vue.use(Router)

const requireComponent = require.context(
  '../views',
  false,
  /[A-Za-z]\w+\.(vue|js)$/
)

const blackList = ['btn']; // 该文件名不自动导入
export const routename = requireComponent.keys().map(v => {
  return v.replace('./', '').replace('.vue', '');
})


const nodeRoutes = routename.filter(v => {
  return !blackList.includes(v);
}).map(fileName => {
  return {
    path: `/${fileName}`,
    name: fileName,
    component: () => import(/* webpackChunkName: "[request]" */ `../views/${fileName}.vue`)
  }
})


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'home' }
    },
    btn,
    // {
    //   path: '/btn',
    //   name: '按钮组',
    //   component: btn,
    //   meta: {},
    // },
    ...nodeRoutes,
  ]
})
