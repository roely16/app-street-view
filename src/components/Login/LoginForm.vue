<template>
    <v-card-text>
        <v-row>
            <v-col cols="12">
                <v-col cols="12">
                    <v-text-field tabindex="1" v-model="usuario.email" clearable hide-details type="email" placeholder="Email" prepend-icon="mdi-at"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field tabindex="2" v-model="usuario.password" @click:append="show_password = !show_password" :append-icon="show_password ? 'mdi-eye-off' : 'mdi-eye'" hide-details :type="show_password ? 'text' : 'password'" placeholder="Contraseña" prepend-icon="mdi-lock"></v-text-field>
                    <!-- <div class="mt-2 text-right">
                        <span class="font-weight-bold primary--text">¿Olvidó su contraseña?</span>
                    </div> -->
                </v-col>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>

import { mapState } from 'vuex'

export default {
    data(){
        return{
            show_password: false
        }
    },
    computed: {
        ...mapState({
            loading: state => state.login.loading,
            usuario: state => state.login.usuario
        })
    }
}
</script>