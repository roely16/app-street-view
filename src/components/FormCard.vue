<template>
    <v-card class="pl-4 pr-4 rounded-xl" elevation="24">
        <v-row justify="center">
            <v-col cols="12" lg="10" sm="10">
                <slot name="form"></slot>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    
}
</script>