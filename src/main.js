// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import bus from './util/bus'
import checkNotify from './util/checkNotify'

Vue.use(element)
Vue.config.productionTip = false
Vue.prototype.bus = bus
Vue.prototype.checkNotify = checkNotify.notify

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
