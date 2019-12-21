import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import component from './components'
import './permission'
import axios from './utils/request'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(elementui)
Vue.use(component)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
