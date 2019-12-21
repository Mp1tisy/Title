import hometop from './home/hometop.vue'
import homenav from './home/homenav.vue'

export default {
  install (Vue) {
    Vue.component('hometop', hometop)
    Vue.component('homenav', homenav)
  }
}
