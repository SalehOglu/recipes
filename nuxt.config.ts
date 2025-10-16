// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true},
  app: {
    head: {
      title: 'Sufrah - Your Ultimate Recipe App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Sufrah is a recipe app that helps you discover and cook delicious meals with ease—perfect for home cooks of all levels.',
        },
        {
          name: 'keywords',
          content: 'recipes, cooking, food, meals, Sufrah, eating, kitchen, home'
        },
      ],
    },
  },
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