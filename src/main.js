import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import fastClick from 'fastclick'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/mdcss.styl'
import tab from './lib/tab.js'

Vue.config.productionTip = false
Vue.prototype.$tab = tab

new Vue({
  router,
  store,
  fastClick,
  render: h => h(App)
}).$mount('#app')

Vue.filter('formatTime',
  function(str) {
    if (!str) return ''
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return ''
    } else if ((time / 1000 < 30)) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
    } else if ((time / (1000*60)) < 60) {
        return parseInt((time / (1000*60))) + '分钟前'
    } else if ((time / (1000*60*60)) < 24) {
        return parseInt(time / (1000*60*60)) + '小时前'
    } else if ((time / (1000*60*60*24)) < 31) {
        return parseInt(time / (1000*60*60*24)) + '天前'
    } else if ((time / (1000*60*60*24*30)) < 12) {
        return parseInt(time / (1000*60*60*24*30)) + '月前'
    } else {
        return parseInt(time / (1000*60*60*24*365)) + '年前'
    }
  }
)