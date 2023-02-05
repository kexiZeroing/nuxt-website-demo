// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://tailwindcss.nuxtjs.org/getting-started/setup
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Hello Nuxt',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      // link: [
      //   {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      // ]
    }
  },
  runtimeConfig: {
    testKey: process.env.TEST_API_KEY
  }
})
