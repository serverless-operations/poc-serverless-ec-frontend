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
          <v-row justify="center">
            <p class="mt-3">
              サーバーレスな EC サイトの動作検証を行うためのサンプルサイトです。
            </p>
          </v-row>
          <v-row class="pl-9">
            <v-col cols="3">
              <v-subheader>User ID</v-subheader>
            </v-col>
            <v-col
              cols="9"
              class="my-auto"
            >
              {{ userId }}
            </v-col>
          </v-row>
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
    console.log('## Mounted.')

    this.setUserId()
    this.loadIdToken()
    await this.subscribePurchaseResult()
  },

  methods: {
    setUserId() {
      this.userId = this.$route.query.user_id as string || 'test-user-id'
    },

    loadIdToken() {
      const bearerToken = this.$auth.getToken('auth0')
      if (!bearerToken) {
        this.$router.push({ path: '/' })
        return
      }
      const idToken = bearerToken.substring(constants.BEARER_PREFIX.length)
      console.log('## ID Token: ', idToken)

      app.setIdToken(idToken)
      this.$apolloHelpers.onLogin(idToken)
    },

    async subscribePurchaseResult() {
      console.log('## Creating subscription observer...')

      const observer = await this.$apollo.getClient().subscribe({
        query: ON_GET_RESULT_SUBSCRIPTION,
        variables: {
          id: this.userId
        }
      }).subscribe({
        next: data => {
          console.log('## On next subscription data', data)
          app.onResultDialog((data as any).data.onGetResult)
        },
        error: err => {
          app.onResultDialog({ id: this.userId, status: 'FAILURE' })
          console.error('## Subscription failed', err)
        }
      })

      console.log('## Got subscription observer', observer)
    },

    async pay() {
      console.log('## Creating payment...')

      app.onPageLoading('購入リクエスト中...')
      const payment = await this.$apollo.getClient().mutate({
        mutation: CREATE_PAYMENT, variables: {
          input: {
            id: this.userId,
            price: 300,
            amount: 1
          }
        }
      }).finally(() => {
        app.offPageLoading()
      })
      app.onResultDialog(payment.data.createPayment)
      console.log('## Payment created. result:', payment)
    }
  },
})
</script>

<style scoped lang="scss">
</style>
