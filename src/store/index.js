import Vue from 'vue'
import Vuex from 'vuex'

import register from './register'
import solicitudes from './solicitudes'
import dialog from './dialog'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    register: register,
    solicitudes: solicitudes,
    dialog: dialog,
    login: login
  }
})
