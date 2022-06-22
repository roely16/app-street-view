<template>
    <div>
        <v-row>
            <v-col cols="12">
                <iframe src="https://orbit.muniguate.com:1111/publication/Free_Basic" type="" />
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
</style>

<script>
export default {
    name: 'OrbitView'
}
</script>