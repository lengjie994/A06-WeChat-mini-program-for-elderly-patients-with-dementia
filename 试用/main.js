
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import treatmentState from './treatmentState.vue';

import tabBar from "@/components/tabbar/tabbar.vue"
Vue.component('tabBar',tabBar)

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif