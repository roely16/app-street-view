<template>
    <v-list class="rounded-lg">
        <v-list-item>
            <v-list-item-avatar left size="40" class="text-center">
                <v-img :src="require('@/assets/img/street-view.png')"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    <span>
                        {{ userData.nombre }}
                    </span>
                    <br />
                    <span class="font-weight-light">
                        <small>
                            {{ userData.email }}
                        </small>
                    </span>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="doLogout()" class="error--text" link>
            <v-list-item-icon>
                <v-icon color="error">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Salir</v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "MenuApp",
    methods: {
        ...mapActions({
            doLogout: "login/doLogout",
        }),
    },
    computed: {
        userData: function () {
            const user = JSON.parse(sessionStorage.getItem("app-street-view"));

            return user;
        },
    },
};
</script>