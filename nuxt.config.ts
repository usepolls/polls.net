// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/styles.css',
    viewer: false
  },
  runtimeConfig: {
    public: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
        fathom: {
            siteId: process.env.FATHOM_SITE_ID,
            domain: process.env.FATHOM_DOMAIN,
        }
    }
  }
})
