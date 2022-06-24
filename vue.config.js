const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/apps/view-catastro-360/' : '/',
	pwa: {
		workboxOptions: {
			skipWaiting: true
		}
	}
})
