<template>
    <v-container>
        <v-row class="text-center pt-0 mt-0">
            <v-col class="pt-0 mt-0">
                <ilustration-form></ilustration-form>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-5">
            <v-col cols="12" lg="5" md="4" sm="7">
                <form-card class="mb-10">
                    <template #form>
                        <v-card-text>
                            <title-form></title-form>
                        </v-card-text>
                        <v-card-text>
                            <form-user></form-user>
                        </v-card-text>
                        <v-card-text class="text-center">
                            <span class="font-weight-medium subtitle-1">
                                ¿Ya está registrado? <v-btn :to="{path: '/'}" color="primary" text>Iniciar Sesión</v-btn>
                            </span>
                        </v-card-text>
                    </template>
                </form-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import Ilustration from '@/components/Register/Ilustration.vue'
import FormUser from '@/components/Register/Form.vue'
import Title from '@/components/Register/Title.vue'
import FormCard from '@/components/FormCard'


export default {
    name: 'RegisterView',
    components: {
        'ilustration-form': Ilustration,
        'form-user': FormUser,
        'title-form': Title,
        'form-card': FormCard
    }
}
</script>