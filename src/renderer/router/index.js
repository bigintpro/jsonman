import Vue from 'vue'
import Router from 'vue-router'
import JsonPrint from "../components/JsonPrint/JsonPrint";
import UrlPrint from "../components/UrlPrint/UrlPrint";
import OperateAndPriorityPrint from "../components/OPPrint/OperateAndPriorityPrint";

Vue.use(Router)

const { ipcRenderer } = require('electron');

let router = new Router({
  routes: [
    {
      path: '/json_print',
      name: 'json-print',
      component: JsonPrint
    },
    {
      path: '/url_print',
      name: 'url-print',
      component: UrlPrint
    },
    {
      path: '/operate_priority_print',
      name: 'operate-priority-print',
      component: OperateAndPriorityPrint
    },
    {
      path: '*',
      redirect: '/json_print'
    }
  ]
})

ipcRenderer.on('href', (event, arg) => {
  if (arg) {
    router.push({ name: arg });
  }
});

export default router;
