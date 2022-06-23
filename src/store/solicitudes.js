import axios from "axios"

const namespaced = true

const state = {
    solicitudes: {
        items: [],
        headers: []
    },
    estados: [],
    niveles: [],
    solicitud: {},
    loading: false,
    alert: {}
}

const mutations = {

    setSolicitudes: (state, payload) => {
        state.solicitudes = payload
    },
    setSolicitud: (state, payload) => {
        state.solicitud = payload.solicitud
        state.estados = payload.estados
        state.niveles = payload.niveles
    },
    setLoading: (state, payload) => {
        state.loading = payload
    },
    setAlert: (state, payload) => {
        state.alert = payload
    }

}

const actions = {

    async fetchSolicitudes({commit}){

        try {
            
            const response = await axios.get(process.env.VUE_APP_API_URL + 'obtener_solicitudes')

            commit('setSolicitudes', response.data)

        } catch (error) {
            
            console.log(error)

        }

    },
    async detalleSolicitud({commit}, payload){

        try {
            
            commit('setAlert', {})

            const data = {
                id: payload
            }
    
            const response = await axios.post(process.env.VUE_APP_API_URL + 'detalle_solicitud', data)
            
            commit('setSolicitud', response.data)
    
            commit('dialog/setShow', true, {root: true})

        } catch (error) {
            
            console.log(error)

        }

    },
    async actualizarSolicitud({commit, state, dispatch}){

        try {
            
            commit('setAlert', {})
            commit('setLoading', true)

            const response = await axios.post(process.env.VUE_APP_API_URL + 'actualizar_solicitud', state.solicitud)

            commit('setAlert', response.data)
            commit('setLoading', false)

            dispatch('fetchSolicitudes')

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