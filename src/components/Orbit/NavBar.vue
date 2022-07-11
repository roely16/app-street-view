<template>
    <v-app-bar elevation="1" color="#000" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title> View Catastro 360º </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
                <v-list class="mb-0 pb-0 pt-0" color="#000">
                    <v-list-item v-bind="attrs" v-on="on" link>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6 text-weight-light">
                                {{ userData.nombre }}
                            </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon>mdi-menu-down</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </template>
            <menu-app></menu-app>
        </v-menu>
    </v-app-bar>
</template>

<style scoped>
.container {
    display: inline-block;
}
</style>

<script>
import MenuApp from "@/components/Orbit/Menu";

export default {
    name: "NavBar",
    components: {
        "menu-app": MenuApp,
    },
    data() {
        return {
            drawer: false,
            group: false,
        };
    },
    computed: {
        userData: function () {
            const user = JSON.parse(sessionStorage.getItem("app-street-view"));

            return user;
        },
    },
};
</script>