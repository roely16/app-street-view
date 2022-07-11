import axios from "axios"

import Swal from 'sweetalert2'

const namespaced = true

import router from '../router'

const state = {
    loaded: false,
    tabID: null,
    shows_message: false,
    check_session: false,
    deny: false
}

const mutations = {
    setLoaded: (state, payload) => {
        state.loaded = payload
    },
    setTabID: (state, payload) => {
        state.tabID = payload
    },
    setShowMessage: (state, payload) => {
        state.shows_message = payload
    },
    setCheckSession: (state, payload) => {
        state.check_session = payload
    },
    setDeny: (state, payload) => {
        state.deny = payload
    }
}

const actions = {

    async checkSession({ commit, state }){

        try {
            
            const userData = JSON.parse(sessionStorage.getItem('app-street-view'))

            const data = {
                session_id: state.tabID,
                id_usuario: userData.id_usuario
            }

            const response = await axios.post(process.env.VUE_APP_API_URL + 'check_session', data)

            if (response.data.status === 400) {
                
                commit('setDeny', true)
                
                commit('setShowMessage', true)

                // Enviar a login
                Swal.fire(
                    'Lo sentimos!',
                    'Ya existe una sesión activa!',
                    'info'
                ).then(() => {
                    sessionStorage.removeItem('app-street-view')
                    router.push({name: 'login'}).catch(() => {})
                    commit('setShowMessage', false)
                })

            }

            commit('setCheckSession', false)

        } catch (error) {
            
            console.log(error)

        }

    }

}

export default {
    namespaced,
    state,
    mutations,
    actions
}