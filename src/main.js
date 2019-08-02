import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import fastClick from 'fastclick'
import './assets/style/reset.css'
import './assets/style/border.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  fastClick,
  render: h => h(App)
}).$mount('#app')
