import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import request from '@/network/request.js'

Vue.config.productionTip = false

Vue.prototype.$request = request

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$request.defaults.baseURL + '/uploads'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: 'Bearer ' + (sessionStorage.token || '')
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
