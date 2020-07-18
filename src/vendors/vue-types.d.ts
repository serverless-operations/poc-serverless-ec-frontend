import { ApolloClient } from 'apollo-client'

declare module 'vue/types/vue' {
  interface Vue {
    readonly $apolloHelpers: {
      onLogin (token: string, apolloClient?: ApolloClient<{}>, tokenExpires?: number): Promise<void>
      onLogout (apolloClient?: ApolloClient<{}>): Promise<void>
      getToken (tokenName?: string): string
    }
  }
}
