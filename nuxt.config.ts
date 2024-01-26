// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
      '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
    runtimeConfig: {
        public: {
            baseURL: 'http://localhost:8000/api',
        },
    },
})
