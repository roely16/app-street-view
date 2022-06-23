<template>
    <v-container class="mt-4">
        <v-card>
            <v-card-text>
                <v-data-table :items="solicitudes.items" :headers="solicitudes.headers">
                    <template v-slot:[`item.estado`]="{ item }">
                        <v-chip :color="item.color" label>
                            {{ item.estado }}
                        </v-chip>
                    </template>

                    <template v-slot:[`item.action`]="{ item }">
                        <v-btn color="success" small icon @click="detalleSolicitud(item.id)">
                            <v-icon>
                                mdi-eye
                            </v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <dialog-solicitud>
            <template #content>
                <form-solicitud></form-solicitud>
            </template>
        </dialog-solicitud>
    </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import Dialog from '@/components/Dialog'
import Form from '@/components/Solicitudes/Form.vue'

export default {
    name: 'SolicitudesView',
    components: {
        'dialog-solicitud': Dialog,
        'form-solicitud': Form
    },  
    methods: {
        ...mapActions({
            fetchSolicitudes: 'solicitudes/fetchSolicitudes',
            detalleSolicitud: 'solicitudes/detalleSolicitud'
        }),
        editarSolicitud(){

        }
    },
    computed: {
        ...mapState({
            solicitudes: state => state.solicitudes.solicitudes
        })
    },
    mounted(){
        this.fetchSolicitudes()
    }
}
</script>