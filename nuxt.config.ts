// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 700],
    },
    display: 'swap',
  },
})