import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lineClamp from 'vue-line-clamp'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  lineClamp,
  render: h => h(App)
}).$mount('#app')
