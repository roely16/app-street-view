import axios from 'axios'

import Swal from 'sweetalert2'

import router from '../router'

const namespaced = true

const state = {
    dependencias: [],
    loading: false
}

const mutations = {

    setDependencias(state, payload){
        state.dependencias = payload
    },
    setLoading(state, payload){
        state.loading = payload
    }

}

const actions = {

    async fetchDependencias({commit}){

        try {
            
            const response = await axios.get(process.env.VUE_APP_API_URL + 'obtener_dependencias')

            commit('setDependencias', response.data)

        } catch (error) {
            
            console.log(error)

        }

    },
    async register({commit}, payload){

        try {
            
            commit('setLoading', true)

            const response = await axios.post(process.env.VUE_APP_API_URL + 'registrar', payload)

            Swal.fire(response.data)
            .then(() => {
                commit('setLoading', false)

                router.go(-1)
            })

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