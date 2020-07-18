<template>
  <div>
    <v-row justify="center">
      <v-card
        width="600"
        class="ma-3 px-3"
        outlined
      >
        <v-card-title>
          サンプル EC サイト
        </v-card-title>

        <v-divider />

        <v-card-text>
          <v-row>
            <p class="mt-3">
              サーバーレスな EC サイトの動作検証を行うためのサンプルサイトです。
            </p>
          </v-row>
          <v-row>
            <p>User ID: {{ userId }}</p>
          </v-row>
          <v-row>
            <p> Payment result: {{ payment }}</p>
          </v-row>
          <v-row>
            <p> Subscription data: {{ subscriptionData }}</p>
          </v-row>
          <!-- <error-message-card /> -->
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="pay"
          >
            購入する
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>


<script lang="ts">
import mixins from 'vue-typed-mixins'
import { Common } from '~/mixins'
import { ON_GET_RESULT_SUBSCRIPTION, CREATE_PAYMENT } from '~/schemas'
import constants from '~/constants'
import { app } from '~/store'

export default mixins(Common).extend({
  layout: 'main',
  data() {
    return {
      userId: '',
      payment: {},
      subscriptionData: {}
    }
  },
  async mounted() {
    console.debug('## Mounted.')

    this.userId = this.$route.query.user_id as string || 'test-user-id'

    const bearerToken = this.$auth.getToken('auth0')
    if (!bearerToken) {
      this.$router.push({ path: '/' })
      return
    }
    const idToken = bearerToken.substring(constants.BEARER_PREFIX.length)
    app.setIdToken(idToken)
    this.$apolloHelpers.onLogin(idToken)
    console.debug('## ID Token: ', idToken)

    console.debug('## Creating subscription observer...')
    const observer = await this.$apollo.getClient().subscribe({
      query: ON_GET_RESULT_SUBSCRIPTION,
      variables: {
        id: this.userId
      }
    }).subscribe({
      next: data => this.subscriptionData = data,
      error: err => this.subscriptionData = err
    })
    console.debug('## Got subscription observer', observer)
  },
  methods: {
    async pay() {
      console.debug('## Creating payment...')
      const payment = await this.$apollo.getClient().mutate({
        mutation: CREATE_PAYMENT, variables: {
          input: {
            id: this.userId,
            price: 300,
            amount: 1
          }
        }
      })
      console.debug('## Payment created. result:', payment)
      this.payment = payment
    }
  },
})
</script>

<style scoped lang="scss">
</style>
