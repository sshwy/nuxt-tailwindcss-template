// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    // '@nuxt/content',
    '@nuxt/ui'
  ],

  css: ['~/assets/main.css'],
  compatibilityDate: '2024-08-29',
})