// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages:true,
  // devtools: { enabled: true },
  modules:[
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // '@nuxtjs/supabase'
    '@nuxtjs/tailwindcss',
    "@nuxt/icon"
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },

  runtimeConfig:{
    public:{
      stripePk:process.env.STRIPE_PK_KEY,
    }
  },

  app:{
    head:{
      script:[
        {
          src:'https://js.stripe.com/v3/', defer:true,
        }
      ]
    }
  },

  compatibilityDate: '2024-07-03'
})