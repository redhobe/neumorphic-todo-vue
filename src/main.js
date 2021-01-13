import Vue from 'vue'
import store from './store'
import App from './App.vue'
import Meta from 'vue-meta'
import './assets/styles.scss'

Vue.use(Meta)
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
