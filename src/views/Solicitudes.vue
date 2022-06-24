<template>
    <v-container class="mt-4 pl-10 pr-10" fluid>
        <v-row>
            <v-col>
                <span class="text-h4">Overview</span>
            </v-col>
        </v-row>
        <v-row align="end" class="mb-4">
            <v-col cols="12" lg="9" md="8" sm="8">
                <v-row>
                    <v-col cols="12" lg="3" sm="4">
                        <v-sheet outlined color="warning" class="rounded-xl">
                            <v-card @click="setFilterEstado(1)" :dark="estado_filter == 1 ? true : false" outlined :color="estado_filter == 1 ? 'warning' : 'white'" min-height="100" class="rounded-xl">
                                <v-card-text class="text-center">
                                    <p class="font-weight-bold">Pendiente</p>
                                    <span class="text-h3">
                                        {{ counter_filter.pendientes }}
                                    </span>
                                </v-card-text>
                            </v-card>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" lg="3" sm="4">
                        <v-sheet outlined color="error" class="rounded-xl">
                            <v-card @click="setFilterEstado(3)" :dark="estado_filter == 3 ? true : false" outlined :color="estado_filter == 3 ? 'error' : 'white'" min-height="100" class="rounded-xl">
                                <v-card-text class="text-center">
                                    <p class="font-weight-bold">Rechazadas</p>
                                    <span class="text-h3">
                                        {{ counter_filter.rechazadas }}
                                    </span>
                                </v-card-text>
                            </v-card>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" lg="3" sm="4">
                        <v-sheet outlined color="success" class="rounded-xl">
                            <v-card @click="setFilterEstado(2)" :dark="estado_filter == 2 ? true : false" outlined :color="estado_filter == 2 ? 'success' : 'white'" min-height="100" class="rounded-xl">
                                <v-card-text class="text-center">
                                    <p class="font-weight-bold">Aceptadas</p>
                                    <span class="text-h3">
                                        {{ counter_filter.aceptadas }}
                                    </span>
                                </v-card-text>
                            </v-card>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="3" sm="4">
                <v-text-field class="rounded-lg" hide-details v-model="search" prepend-inner-icon="mdi-magnify" label="Buscar" outlined></v-text-field>
            </v-col>
        </v-row>
        <v-card class="rounded-xl" outlined elevation="0">
            <v-card-text class="pl-0 pr-0">
                <v-data-table :page.sync="page" :items-per-page="per_page ? per_page : filter_items.length" fixed-header :search="search" hide-default-footer :items="filter_items" :headers="solicitudes.headers">
                    <template v-slot:[`item.estado`]="{ item }">
                        <v-chip outlined :color="item.color" label>
                            {{ item.estado }}
                        </v-chip>
                    </template>

                    <template v-slot:[`item.action`]="{ item }">
                        <v-btn color="success" large icon @click="detalleSolicitud(item.id)">
                            <v-icon>
                                mdi-eye
                            </v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
                <pagination :items="filter_items.length"></pagination>
            </v-card-text>
        </v-card>
        <dialog-solicitud>
            <template #content>
                <form-solicitud></form-solicitud>
            </template>
        </dialog-solicitud>
    </v-container>
</template>

<style>
    .v-text-field--outlined >>> fieldset {
        border-color: #b3b1b1;
    }
    .custom {
        width: auto;
        margin-left: auto;
    }

</style>

<script>

import { mapState, mapActions, mapMutations } from 'vuex'

import Dialog from '@/components/Dialog'
import Form from '@/components/Solicitudes/Form.vue'
import Pagination from '@/components/Pagination'

export default {
    name: 'SolicitudesView',
    components: {
        'dialog-solicitud': Dialog,
        'form-solicitud': Form,
        'pagination': Pagination
    },  
    data(){
        return{
            pageCount: 0,
            itemsPerPage: 10,
            search: null,
            estado_filter: null      
        }
    },
    methods: {
        ...mapActions({
            fetchSolicitudes: 'solicitudes/fetchSolicitudes',
            detalleSolicitud: 'solicitudes/detalleSolicitud'
        }),
        ...mapMutations({
            setPage: 'pagination/setPage'
        }),
        editarSolicitud(){

        },
        setFilterEstado(estado){

            if (this.estado_filter && this.estado_filter == estado) {
                
                this.estado_filter = null

                return
            }

            this.estado_filter = estado

        }
    },
    computed: {
        ...mapState({
            solicitudes: state => state.solicitudes.solicitudes,
            per_page: state => state.pagination.per_page
        }),
        page: {
            set(val){
                this.setPage(val)
            },
            get(){
                return parseInt(this.$store.state.pagination.page)
            }
        },
        filter_items: function(){

            if (!this.estado_filter) {
                
                return this.solicitudes.items

            }

            let items = this.solicitudes.items.filter(item => item.id_estado == this.estado_filter)

            return items
        },
        counter_filter: function(){

            let pendientes = this.solicitudes.items.filter(item => item.id_estado == 1)
            let aceptadas = this.solicitudes.items.filter(item => item.id_estado == 2)
            let rechazadas = this.solicitudes.items.filter(item => item.id_estado == 3)

            return {
                pendientes: pendientes.length,
                aceptadas: aceptadas.length,
                rechazadas: rechazadas.length
            }
        }
    },
    mounted(){
        this.fetchSolicitudes()
    }
}
</script>