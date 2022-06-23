<template>
    <v-form @submit.prevent="verificar_registro()" v-model="valid" ref="form">
        <v-row>
            <v-col cols="12">
                <v-text-field :rules="[v => !!v]" v-model="usuario.nombre" hide-details placeholder="Nombre Completo" prepend-icon="mdi-account"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-autocomplete :rules="[v => !!v]" v-model="usuario.id_dependencia" :items="dependencias" item-text="nombre" item-value="id" hide-details placeholder="Dependencia" prepend-icon="mdi-office-building"></v-autocomplete>
            </v-col>
            <v-col cols="12">
                <v-text-field :rules="[v => !!v]" v-model="usuario.email" hide-details type="email" placeholder="Email" prepend-icon="mdi-at"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field :rules="[v => !!v]" v-model="usuario.telefono" hide-details type="phone" placeholder="Teléfono" prepend-icon="mdi-phone"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field :rules="[v => !!v]" append-icon="mdi-eye" v-model="usuario.password" hide-details type="password" placeholder="Contraseña" prepend-icon="mdi-lock"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field :rules="[v => !!v]" append-icon="mdi-eye" v-model="usuario.repeat_password" hide-details type="password" placeholder="Repita su contraseña" prepend-icon="mdi-lock"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="mt-5">
            <v-col class="pl-10 pr-10">
                <v-btn :loading="loading" :disabled="loading" type="submit" large class="elevation-0 rounded-lg" color="primary" block>
                    Registrarse
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
    
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
    name: 'RegisterForm',
    data(){
        return{
            usuario: {
                nombre: null,
                id_dependencia: null,
                email: null,
                telefono: null,
                password: null,
                repeat_password: null
            },
            valid: true
        }
    },
    methods: {
        ...mapActions({
            fetchDependencias: 'register/fetchDependencias',
            register: 'register/register'
        }),
        verificar_registro(){

            this.$refs.form.validate()

            if (this.valid) {
    
                this.register(this.usuario)
    
            }

        }
    },
    computed: {
        ...mapState({
            dependencias: state => state.register.dependencias,
            loading: state => state.register.loading
        })
    },
    mounted(){
        this.fetchDependencias()
    }
}
</script>