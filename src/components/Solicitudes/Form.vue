<template>
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Detalle de Solicitud
        </v-card-title>

        <v-card-text class="mt-4">
            <v-row>
                <v-col>
                    <v-row>
                        <v-col cols="12">
                            <small>ID</small>
                            <h2>
                                {{ solicitud.id }}
                            </h2>
                        </v-col>
                        <v-col cols="12">
                            <small>Nombre</small>
                            <h2>
                                {{ solicitud.nombre }}
                            </h2>
                        </v-col>
                        <v-col cols="12">
                            <small>Email</small>
                            <h2>
                                {{ solicitud.email }}
                            </h2>
                        </v-col>
                        <v-col cols="12">
                            <small>Teléfono</small>
                            <h2>
                                {{ solicitud.telefono }}
                            </h2>
                        </v-col>
                        <v-col cols="12">
                            <small>Dependencia</small>
                            <h2>
                                {{ solicitud.dependencia }}
                            </h2>
                        </v-col>
                    </v-row>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                    <v-row justify="center">
                        <v-col cols="10">
                            <v-select label="Estado" v-model="solicitud.id_estado" :items="estados" item-value="id" item-text="nombre" placeholder="Estado"></v-select>
                        </v-col>
                        <v-col cols="10">
                            <v-select v-model="solicitud.id_nivel" label="Nivel" :items="niveles" item-value="id" item-text="nombre" placeholder="Nivel"></v-select>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="10">
                            <v-btn @click="actualizarSolicitud()" :loading="loading" :disabled="loading" class="elevation-0" color="primary">
                                Aceptar
                            </v-btn>
                            <v-btn class="ml-2" color="secondary">
                                Cancelar
                            </v-btn>
                        </v-col>
                    </v-row>

                    <v-row class="mt-4" v-if="alert.message" justify="center">
                        <v-col cols="12">
                            <v-alert
                                elevation="0"
                                :type="alert.color"
                                dense
                                outlined
                            >
                                {{ alert.message }}
                            </v-alert>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
    name: 'FormSolicitud',
    data(){
        return{
            show_alert: true
        }
    },
    methods: {
        ...mapActions({
            actualizarSolicitud: 'solicitudes/actualizarSolicitud'
        })
    },
    computed: {
        ...mapState({
            solicitud: state => state.solicitudes.solicitud,
            estados: state => state.solicitudes.estados,
            niveles: state => state.solicitudes.niveles,
            loading: state => state.solicitudes.loading,
            alert: state => state.solicitudes.alert
        })
    }
}
</script>