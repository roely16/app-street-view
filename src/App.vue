<template>
    <v-app @mousemove="mouseMove()">
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
    name: "App",
    methods: {
        ...mapMutations({
            setTabID: 'home/setTabID'
        })
    },
    created() {
        const tabIdKey = "tabIdStorageKey";
        const initTabId = () => {
            const id = sessionStorage.getItem(tabIdKey);
            if (id) {
                sessionStorage.removeItem(tabIdKey);
                return id;
            }
            return Date.now();
        };
        const tabId = initTabId();

        this.setTabID(tabId)

        window.addEventListener("beforeunload", () => {
            sessionStorage.setItem(tabIdKey, tabId)
        });
    },
};
</script>
