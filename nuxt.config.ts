// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseURL: '/nuxt-spa-posts/'
    },
  },
  
  modules: [
    '@pinia/nuxt'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/colors.scss";',
        },
      },
    },
  },

  css: ['~/assets/styles/main.scss'],

  app: {
    head: {  
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ], 
    },
  }
})
