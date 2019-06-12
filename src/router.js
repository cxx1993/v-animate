import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const requireComponent = require.context(
  './views',
  false,
  /[A-Za-z]\w+\.(vue|js)$/
)

export const routename = requireComponent.keys().map(v=>{
  return v.replace('./','').replace('.vue','');
})


const nodeRoutes = routename.map(fileName =>{
  return {
    path: `/${fileName}`,
    name: fileName,
    component: () => import(/* webpackChunkName: "[request]" */ `./views/${fileName}.vue`)
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
    ...nodeRoutes
  ]
})
