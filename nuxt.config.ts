import { fail } from 'assert'
import { Configuration } from '@nuxt/types'
import dotenv from 'dotenv'

dotenv.config()

const config: Configuration = {
  mode: 'spa',
  srcDir: 'src/',
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
    '@nuxtjs/apollo',
    '@nuxtjs/auth'
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sample Serverless EC Application' },
    ]
  },
  styleResources: {
    scss: [
     '~/assets/scss/style.scss'
     ]
   },
  dotenv: {
    path: './'
  },
  plugins: [],
  vuetify: {
    treeShake: {
      directives: [
        'Resize'
      ]
    }
  },
  apollo: {
    authenticationType: '', // Set empty string to prevent 'Bearer' prefixing
    clientConfigs: {
      default: '~/apollo/config.ts'
    }
  },
  auth: {
    strategies: {
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID,
        scope: [ 'openid', 'profile' ],
        response_type: 'id_token token',
        token_key: 'id_token'
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/callback',
      home: '/main'
    }
  },
  env: {
    APPSYNC_GRAPHQL_ENDPOINT: process.env.APPSYNC_GRAPHQL_ENDPOINT || fail('Missing required environment variable APPSYNC_GRAPHQL_ENDPOINT'),
    APPSYNC_REGION: process.env.APPSYNC_REGION || fail('Missing required environment variable APPSYNC_REGION'),
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || fail('Missing required environment variable AUTH0_DOMAIN'),
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || fail('Missing required environment variable AUTH0_CLIENT_ID')
  }
}

export default config
