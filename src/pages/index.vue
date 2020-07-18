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
          <p class="mt-3">
            サーバーレスな EC サイトの動作検証を行うためのサンプルサイトです。
          </p>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="signin"
          >
            サインイン
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>


<script lang="ts">
import mixins from 'vue-typed-mixins'
import ErrorMessageCard from '~/components/ErrorMessageCard.vue'
import { Common } from '~/mixins'
// import { app } from '~/store'

export default mixins(Common).extend({
  layout: 'main',
  auth: false,
  components: { ErrorMessageCard },
  mounted() {
    // app.onErrorMessageCard('xxxxxxxxxx')
  },
  methods: {
    signin() {
      this.$auth.loginWith('auth0')
    }
  }
})
</script>


<style scoped lang="scss">
</style>
