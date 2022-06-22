<template>
	<div>
		<v-row class="mt-5 text-center pt-0 mt-0 header" align="center">
			<v-col class="pt-0 mt-0">
				<animation></animation>
			</v-col>
		</v-row>
		<v-row class="mt-5">
            <v-col class="pl-0 pr-0">
				<form-card class="form">
					<template #form>
						<login-form></login-form>
						<v-card-text class="mt-4 mb-4">
							<v-btn class="elevation-0" color="primary" large block>Ingresar</v-btn>
						</v-card-text>
						<v-card-text class="text-center">
							<span class="font-weight-medium subtitle-1">
								¿No está registrado? <span class="font-weight-bold primary--text" href="">Registrarse</span>
							</span>
						</v-card-text>
					</template>
				</form-card>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
	.header{
		min-height: 30vh;
	}
	.form{
		min-height: 70vh;
	}
</style>

<script>

import Animation from '@/components/Animation'
import FormCard from '@/components/FormCard'
import LoginForm from '@/components/Login/LoginForm'

export default {
  name: "HomeView",
  components: {
	'form-card': FormCard,
	'login-form': LoginForm,
	'animation': Animation
  }
};
</script>
