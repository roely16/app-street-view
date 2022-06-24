const namespaced = true

const state = {
    page: 1,
    items_per_page: [
        {
            text: '10',
            value: 10
        },
        {
            text: '25',
            value: 25
        },
        {
            text: '50',
            value: 50
        },
        {
            text: 'Todos',
            value: null
        }
    ],
    per_page: 10
}

const mutations = {
    setPage: (state, payload) => {
        state.page = payload
    },
    setPerPage: (state, payload) => {
        state.per_page = payload
    }
}

export default {
    namespaced,
    state,
    mutations
}