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
				<form-card class="form">
					<template #form>
						<login-form></login-form>
						<v-card-text class="pl-10 pr-10 mt-4 mb-4">
							<v-btn tabindex="3" @click="doLogin()" :loading="loading" :disabled="loading || !usuario.email || !usuario.password" class="elevation-0 rounded-lg" color="primary" large block>Ingresar</v-btn>
						</v-card-text>
						<v-card-text class="text-center">
							<span class="font-weight-medium subtitle-1">
								¿No está registrado? <v-btn :to="{name: 'register'}" color="primary" text>
									Registrarse
								</v-btn>
							</span>
						</v-card-text>
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
	.login{
		background-color: red;
	}
	
</style>

<script>

import FormCard from '@/components/FormCard'
import LoginForm from '@/components/Login/LoginForm'

import { mapState, mapActions } from 'vuex';

export default {
	name: "HomeView",
	components: {
		'form-card': FormCard,
		'login-form': LoginForm,
	},
	methods: {
		...mapActions({
			doLogin: 'login/doLogin'
		})
	},	
	computed: {
		...mapState({
			usuario: state => state.login.usuario,
			loading: state => state.login.loading
		})
	}
};
</script>
