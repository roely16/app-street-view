<template>
    <v-form @submit.prevent="verificar_registro()" v-model="valid" ref="form">
        <v-row>
            <v-col cols="12">
                <v-text-field tabindex="1" :rules="[v => !!v]" v-model="usuario.nombre" hide-details placeholder="Nombre Completo" prepend-icon="mdi-account"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-autocomplete tabindex="2" :rules="[v => !!v]" v-model="usuario.id_dependencia" :items="dependencias" item-text="nombre" item-value="id" hide-details placeholder="Dependencia" prepend-icon="mdi-office-building"></v-autocomplete>
            </v-col>
            <v-col cols="12">
                <v-text-field tabindex="3" :rules="[v => !!v]" v-model="usuario.email" hide-details type="email" placeholder="Email" prepend-icon="mdi-at"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field tabindex="4" :rules="[v => !!v]" v-model="usuario.telefono" hide-details type="phone" placeholder="Teléfono" prepend-icon="mdi-phone"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field @click:append="show_password = !show_password" tabindex="5" :rules="[v => !!v]" :append-icon="show_password ? 'mdi-eye-off' : 'mdi-eye'" v-model="usuario.password" hide-details :type="show_password ? 'text' : 'password'" placeholder="Contraseña" prepend-icon="mdi-lock"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field @click:append="show_repeat_password = !show_repeat_password" :append-icon="show_repeat_password ? 'mdi-eye-off' : 'mdi-eye'" tabindex="6" :rules="[v => !!v]" v-model="usuario.repeat_password" :type="show_repeat_password ? 'text' : 'password'" hide-details placeholder="Repita su contraseña" prepend-icon="mdi-lock"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="mt-5">
            <v-col class="pl-10 pr-10">
                <v-btn tabindex="7" :loading="loading" :disabled="loading" type="submit" large class="elevation-0 rounded-lg" color="primary" block>
                    Registrarse
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
    
</template>

<script>

import Swal from 'sweetalert2'

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
            valid: true,
            show_password: false,
            show_repeat_password: false
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
    
                if (this.usuario.password != this.usuario.repeat_password) {
                    
                    Swal.fire(
                        'Atención!',
                        'Ambas contraseñas deben de coincidir!',
                        'info'
                    )

                    return

                }
    
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