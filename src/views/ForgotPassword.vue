<template>
    <v-container>
        <v-row class="mt-5 text-center pt-0 mt-0 header" align="center">
			<v-col class="pt-0 mt-0">
				<v-avatar size="250" rounded>
					<v-img contain :src="require('@/assets/img/DCAI.png')"></v-img>
				</v-avatar>
			</v-col>
		</v-row>
        <v-row justify="center" class="mt-5">
            <v-col cols="12" lg="5" md="6" sm="7">
                <form-card>
                    <template #form>
                        <form-content></form-content>
                    </template>
                </form-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
	.header{
		min-height: 30vh;
	}
</style>

<script>

import FormCard from '@/components/FormCard'
import Form from '@/components/Forgot/Form'

export default {
    name: 'ForgotPassword',
    components: {
        'form-card': FormCard,
        'form-content': Form
    }
}
</script>