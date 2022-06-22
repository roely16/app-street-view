<template>
    <div>
        <v-row class="mt-5 mb-0 pb-0">
            <v-col class="mb-0 pb-0">
                <v-btn text>
                    <v-icon>
                        mdi-arrow-left
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="text-center pt-0 mt-0">
            <v-col class="pt-0 mt-0">
                <ilustration-form></ilustration-form>
            </v-col>
        </v-row>
        <v-row class="mt-5">
            <v-col>
                <v-card class="pl-4 pr-4" height="100vh" elevation="24" rounded>
                    <v-card-text>
                        <title-form></title-form>
                    </v-card-text>
                    <v-card-text>
                        <form-user></form-user>
                    </v-card-text>
                    <v-card-text class="mt-5">
                        <form-button></form-button>
                    </v-card-text>
                    <v-card-text class="text-center">
                        <span class="font-weight-medium subtitle-1">
                            ¿Ya está registrado? <a href="">Iniciar Sesión</a>
                        </span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import Ilustration from '@/components/Register/Ilustration.vue'
import FormUser from '@/components/Register/Form.vue'
import Title from '@/components/Register/Title.vue'
import FormButton from '@/components/Register/Button.vue'

export default {
    name: 'RegisterView',
    components: {
        'ilustration-form': Ilustration,
        'form-user': FormUser,
        'title-form': Title,
        'form-button': FormButton
    }
}
</script>