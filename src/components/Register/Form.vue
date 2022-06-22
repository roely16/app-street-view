<template>
    <v-row>
        <v-col cols="12">
            <v-text-field hide-details placeholder="Nombre Completo" prepend-icon="mdi-account"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-autocomplete hide-details placeholder="Dependencia" prepend-icon="mdi-office-building"></v-autocomplete>
        </v-col>
        <v-col cols="12">
            <v-text-field hide-details type="email" placeholder="Email" prepend-icon="mdi-at"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field hide-details type="phone" placeholder="Teléfono" prepend-icon="mdi-phone"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field hide-details type="phone" placeholder="Contraseña" prepend-icon="mdi-lock"></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'RegisterForm'
}
</script>