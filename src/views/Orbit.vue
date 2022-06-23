<template>
    <div>
        <v-row v-if="url">
            <v-col cols="12">
                <iframe src="https://orbit.muniguate.com:1111/publication/Free_Basic" />
            </v-col>
        </v-row>
        <v-row v-else class="ma-4" justify="center">
            <v-col cols="6">
                <v-alert
                    prominent
                    type="error"
                    >
                    <v-row align="center">
                        <v-col class="grow">
                            ES NECESARIO QUE SOLICITE PERMISOS DE VISUALIZACIÓN CON EL ADMINISTRADOR
                        </v-col>
                        <v-col class="shrink">
                            <v-btn @click="$router.push({name: 'login'})">
                                OK
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-alert>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
    iframe {
        display: block;       /* iframes are inline by default */
        background: #000;
        border: none;         /* Reset default border */
        height: 100vh;        /* Viewport-relative units */
        width: 100vw;
    }
    #parent {
        width: 200px;
        height: 200px;
        border:solid 1px #000;
    }
    #parent > button {
        opacity: 0.3;
        position:relative;
        float: right;
        right:10px;
        bottom:35px;
        transition: 0.5s;
    }
    #parent > button {
        opacity: 1;
    } 
</style>

<script>
export default {
    name: 'OrbitView',
    computed: {
        url: function(){

            const result = JSON.parse(localStorage.getItem('app-street-view'))

            if (result) {
                
                return result.url

            }

            return null

            
        }
    }
}
</script>