import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'json-print',
      component: require('@/components/Jsonprint/JsonPrint').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
