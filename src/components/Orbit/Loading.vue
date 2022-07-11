<template>
    <div>
        <animation></animation>
        <v-row class="text-center">
            <v-col>
                <span class="text-h6">Verificando Acceso...</span>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import Animation from '@/components/Animation'

export default {
    name: 'LoadingOrbit',
    components: {
        'animation': Animation
    }
}
</script>