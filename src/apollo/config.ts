
import { Context } from '@nuxt/types/app';
import { ApolloLink } from 'apollo-link'
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link'
import { AUTH_TYPE } from 'aws-appsync'

export default (ctx: Context) => {

  const { APPSYNC_GRAPHQL_ENDPOINT, APPSYNC_REGION } = ctx.env
  const link = ApolloLink.from([

    createSubscriptionHandshakeLink({
      url: APPSYNC_GRAPHQL_ENDPOINT,
      region: APPSYNC_REGION,
      auth: {
        type: AUTH_TYPE.OPENID_CONNECT,
        jwtToken: () => ctx.store.state.app.creds.idToken
      },

    })
  ])
  return { link, disableOffline: true }
}
