<template>
    <v-card-text>
        <v-row>
            <v-col>
                <p class="subtitle-1 font-weight-light text-justify">Estimado usuario.  Es necesario que ingrese el correo electrónico proporcionado al momento de su registro para poder recuperar su contraseña.</p>
            </v-col>
        </v-row>
        <v-row class="mt-0 pt-0">
            <v-col cols="12" class="mt-0 pt-0">
                <v-text-field v-model="email" tabindex="1" clearable hide-details type="email" placeholder="Email" prepend-icon="mdi-at"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="mt-5">
            <v-col class="pl-10 pr-10">
                <v-btn @click="recoverPassword(email)" :disabled="!email" tabindex="7" type="submit" large class="elevation-0 rounded-lg" color="primary" block>
                    ENVIAR
                </v-btn>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'FormForgot',
    data(){
        return{
            email: null
        }
    },
    methods: {
        ...mapActions({
            recoverPassword: 'login/recoverPassword'
        })
    }
}
</script>