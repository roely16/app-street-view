import axios from 'axios'

import Swal from 'sweetalert2'

import router from '../router'

const namespaced = true

const state = {
    loading: false,
    usuario: {
        email: null,
        password: null
    }
}

const mutations = {

    setLoading: (state, payload) => {
        state.loading = payload
    },
    setUsuario: (state, payload) => {
        state.usuario = payload
    }

}

const actions = {

    async doLogin({commit, state}){

        try {
            
            commit('setLoading', true)

            const response = await axios.post(process.env.VUE_APP_API_URL + 'login', state.usuario)

            localStorage.setItem('app-street-view', JSON.stringify(response.data))

            commit('setLoading', false)
            commit('setUsuario', {email: null, password: null})

            router.push({name: 'orbit'})

        } catch (error) {
            
            Swal.fire(error.response.data)

            commit('setLoading', false)

        }

    }

}

export default {
    namespaced,
    state,
    mutations,
    actions
}