
<template>
  <section>
    <v-card
      v-if="enabled"
      class="error-message-card"
      width="100%"
      outlined
    >
      <v-card-title>
        <v-avatar
          slot="icon"
          class="mr-2"
          size="28"
        >
          <v-icon color="red">
            mdi-alert-circle
          </v-icon>
        </v-avatar>
        <span class="body-2 font-weight-light d-inline-block message-line text-truncate">{{ message }}</span>
        <v-spacer />
        <v-btn
          color="grey"
          icon
          text
          @click="close()"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </section>
</template>


<script lang="ts">
import Vue from 'vue'
import { app } from '~/store';
export default Vue.extend({
  computed: {
    enabled() {
      return app.errorMessageCard.enabled
    },
    message() {
      return app.errorMessageCard.message
    }
  },
  methods: {
    close(): void {
      app.offErrorMessageCard()
    }
  }
})
</script>


<style scoped lang="scss">
</style>
