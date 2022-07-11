<template>
    <div >
        <navbar></navbar>
        <v-row v-if="url && !deny && !check_session">
            <v-col cols="12" class="pr-0 mb-0 pb-0">
                <iframe ref="orbit" id="orbit" :src="url" width="100%" />
            </v-col>
        </v-row>
        <v-row v-else-if="!url" class="ma-4" justify="center">
            <v-col cols="6">
                <v-alert prominent type="error">
                    <v-row align="center">
                        <v-col class="grow">
                            ES NECESARIO QUE SOLICITE PERMISOS DE VISUALIZACIÓN
                            CON EL ADMINISTRADOR
                        </v-col>
                        <v-col class="shrink">
                            <v-btn @click="$router.push({ name: 'login' })">
                                OK
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-alert>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" v-if="check_session">
            <v-col cols="2">
                <loading></loading>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
    iframe {
        display: block; /* iframes are inline by default */
        background: #000;
        border: none; /* Reset default border */
        height: 93vh;
        width: 100vw;
        /* pointer-events:none */
    }
</style>

<script>

import NavBar from "@/components/Orbit/NavBar";
import Loading from '@/components/Orbit/Loading'

import { mapActions, mapMutations, mapState } from "vuex";

export default {
    name: "OrbitView",
    components: {
        navbar: NavBar,
        'loading': Loading
    },
    data(){
        return{
            interval: null,
            loading: false
        }
    },
    methods: {
        ...mapActions({
            checkSession: 'home/checkSession'
        }),
        ...mapMutations({
            setLoaded: 'home/setLoaded'
        })
    },
    computed: {
        ...mapState({
            loaded: state => state.home.loaded,
            shows_message: state => state.home.shows_message,
            check_session: state => state.home.check_session,
            deny: state => state.home.deny
        }),
        url: function () {
            const result = JSON.parse(sessionStorage.getItem("app-street-view"));

            if (result) {
                return result.url;
            }

            return null;
        },
    },
    watch: {
        shows_message: function(val){
            if (!val) {
                clearInterval(this.interval)
            }
        }
    },
    mounted(){

        this.interval = setInterval(() => {

            if (!this.shows_message) {
                
                this.checkSession()

            }

        }, 1000)

    },
};
</script>