import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ElementUI
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

// axios
import Axios from 'axios'
Vue.prototype.$axios = Axios


import "@/assets/css/global.css"


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
