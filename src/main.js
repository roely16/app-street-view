import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
Vue.use(LottieAnimation); 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
