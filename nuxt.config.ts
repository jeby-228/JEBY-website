// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  vite: {
    resolve: {
      alias: {
        '@intlify/core': '@intlify/core/dist/core.mjs'
      }
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'tw',
        file: 'tw.json'
      },
      {
        code: 'es',
        file: 'es.json'
      }
    ],
    defaultLocale: 'tw',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
  css: [
    '@/assets/css/main.css',
    'flag-icons/css/flag-icons.min.css'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.client.js', mode: 'client' }
  ],
  build: {
    transpile: [
      'bootstrap'
    ]
  },
  runtimeConfig: {
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS
  }
})
