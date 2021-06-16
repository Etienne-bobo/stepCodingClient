import { dynamicRoutes } from './utils/route.generate'
import createSEOMeta from './utils/meta.util'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: '0.0.0.0',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stepCoding',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...createSEOMeta({
        title: 'stepCoding',
        description:
          'find here articles at the cutting edge of the technology ',
      }),
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main', '~/assets/css/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/prism', mode: 'client' },
    { src: '~/plugins/smooth-scroll.client', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-material-design-icons', '@nuxtjs/markdownit'],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },
  env: {
    strapiBaseUri: 'https://stepcoding-server.herokuapp.com/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false,
        },
      },
    },
  },

  generate: {
    routes: dynamicRoutes,
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        redirect: '/',
      })
    },
  },
}
