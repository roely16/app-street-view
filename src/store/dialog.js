const namespaced = true

const state = {
    show: false
}

const mutations = {
    setShow: (state, payload) => [
        state.show = payload
    ]
}

export default {
    namespaced,
    state,
    mutations
}