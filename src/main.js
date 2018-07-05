import './css/main.scss'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

UIkit.use(Icons)
// Vue.use(VueSocketio, io('http://localhost:5000'), store)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
