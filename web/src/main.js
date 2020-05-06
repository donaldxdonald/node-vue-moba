import Vue from 'vue'
import App from './App.vue'
import './assets/scss/base.scss'
import './assets/iconfont/iconfont.css'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
