<template>
        <v-row no-gutters align="center">
            <v-col cols="auto">
                <v-btn-toggle>
                    <v-btn @click="setPage(page - 1)" :disabled="page == 1" class="elevation-0">
                        <v-icon>
                            mdi-chevron-left
                        </v-icon>
                    </v-btn>
                    <v-btn @click="setPage(page + 1)" :disabled="page == total_pages" class="elevation-0">
                        <v-icon>
                            mdi-chevron-right
                        </v-icon>
                    </v-btn>
                </v-btn-toggle>
            </v-col>
            <v-col cols="3" class="ml-5">
                <v-row align="center">
                    <v-col class="text-right">
                        Página
                    </v-col>
                    <v-col cols="3"> 
                        <v-text-field type="number" :min="1" :max="total_pages" v-model="page" dense hide-details outlined></v-text-field>
                    </v-col>
                    <v-col>
                        de <span class="ml-2">{{ total_pages }}</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider vertical class="mr-10"></v-divider>
            <v-col cols="3">
                <v-row align="center">
                    <v-col cols="5">
                        Filas por página
                    </v-col>
                    <v-col cols="4">
                        <v-select v-model="per_page" :items="items_per_page" hide-details></v-select>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
</template>

<style scoped>
    .nowrap-overflow {
        flex-wrap: nowrap;
        overflow-x: auto;
    }
</style>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'TablePagination',
    props: {
        items: Number
    },
    methods: {
        ...mapMutations({
            setPage: 'pagination/setPage',
            setPerPage: 'pagination/setPerPage'
        })
    },
    computed: {
        ...mapState({
            items_per_page: state => state.pagination.items_per_page
        }),
        page: {
            set(val){
                this.setPage(val)
            },  
            get(){
                return this.$store.state.pagination.page
            }
        },
        per_page: {
            set(val){
                
                this.setPerPage(val)
            },
            get(){
                return this.$store.state.pagination.per_page
            }
        },
        total_pages: function(){

            if (!this.per_page) {
                return 1
            }
            
            return Math.ceil(this.items / this.per_page)
        }
    }
}
</script>