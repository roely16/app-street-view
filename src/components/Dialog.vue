<template>
    <v-dialog
      v-model="show"
      width="700"
      @click:outside="setShow(false)"
      @keydown.esc="setShow(false)"
    >

        <slot name="content"></slot>

    </v-dialog>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'DialogModal',
    methods: {
        ...mapMutations({
            setShow: 'dialog/setShow'
        })
    },  
    computed: {
        ...mapState({
            show: state => state.dialog.show
        })
    }
}
</script>