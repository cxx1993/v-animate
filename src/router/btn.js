import btn from '../views/btn.vue'
const requireComponent = require.context(
  '../views/btn',
  false,
  /[A-Za-z]\w+\.(vue|js)$/
)

export const routename = requireComponent.keys().map(v => {
  return v.replace('./', '').replace('.vue', '');
})


const nodeRoutes = routename.map(fileName => {
  return {
    path: `/${fileName}`,
    name: `btn-${fileName}`,
    component: () => import(/* webpackChunkName: "[request]" */ `../views/btn/${fileName}.vue`)
  }
})

console.log(requireComponent.keys())

export default {
  path: '/btn',
  name: '按钮组',
  component: btn,
  redirect: { name: 'btn-avv' },
  meta: {},
  children: nodeRoutes || []
};
