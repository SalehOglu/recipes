// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true},
  image: {
    // Allow remote domains for Nuxt Image
    domains: ['cdn.dummyjson.com']
  },
  // ssr: false,
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon'
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    }
  },

})