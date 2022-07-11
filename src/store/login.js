import axios from 'axios'

import Swal from 'sweetalert2'

import router from '../router'

const namespaced = true

const state = {
    loading: false,
    usuario: {
        email: null,
        password: null,
        tabId: null
    },
    sending: false
}

const mutations = {

    setLoading: (state, payload) => {
        state.loading = payload
    },
    setUsuario: (state, payload) => {
        state.usuario = payload
    },
    setSending: (state, payload) => {
        state.sending = payload
    },
    setTabId: (state, payload) => {
        state.usuario.tabId = payload
    }

}

const actions = {

    async doLogin({commit, state, rootState}){

        try {
            
            commit('setTabId', rootState.home.tabID)

            commit('setLoading', true)

            const response = await axios.post(process.env.VUE_APP_API_URL + 'login', state.usuario)

            sessionStorage.setItem('app-street-view', JSON.stringify(response.data))

            commit('setLoading', false)
            commit('setUsuario', {email: null, password: null})

            commit('home/setCheckSession', true, {root: true})

            router.push({name: 'orbit'})

        } catch (error) {
            
            Swal.fire(error.response.data)
            .then((result) => {

                if (result.isConfirmed) {

                    if (error.response.data.action === 'close_session') {
                        
                        const data = {
                            id: error.response.data.id_bitacora
                        }
    
                        axios.post(process.env.VUE_APP_API_URL + 'close_session', data)

                        Swal.fire(
                            'Excelente!',
                            'La sesión anterior ha sido finalizada.  Es necesario reintantar ingresar.',
                            'success'
                        )

                    }
                    
                }

            })

            commit('setLoading', false)

        }

    },
    async recoverPassword({commit}, payload){

        try {
            
            commit('setSending', true)

            const data = {
                email: payload
            }

            const response = await axios.post(process.env.VUE_APP_API_URL + 'recover_password', data)

            Swal.fire(response.data)

            commit('setSending', false)

        } catch (error) {
            
            commit('setSending', false)

            Swal.fire(error.response.data)

        }

    },
    async doLogout({rootState, commit}){

        try {
            
            const userData = JSON.parse(sessionStorage.getItem('app-street-view'));

            // Enviar petición
            const data = {
                id: userData.id_usuario,
                tabId: rootState.home.tabID
            }

            const response = await axios.post(process.env.VUE_APP_API_URL + 'logout', data)

            if (response.data.status === 200) {
                
                sessionStorage.removeItem('app-street-view')

                sessionStorage.setItem('tabIdStorageKey', Date.now())

                commit('home/setTabID', sessionStorage.getItem('tabIdStorageKey'), {root: true})

                router.push({name: 'login'})

            }

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