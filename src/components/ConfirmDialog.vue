<template>
  <v-dialog
    v-model="enabled"
    persistent
    max-width="460"
  >
    <v-card
      width="100%"
      outlined
    >
      <v-card-title class="my-3">
        <v-spacer />
        <v-avatar
          slot="icon"
          class="mr-2"
          size="28"
        >
          <v-icon
            v-if="status === 'success'"
            color="green"
          >
            mdi-check-circle
          </v-icon>
          <v-icon
            v-else
            color="red"
          >
            mdi-alert-circle
          </v-icon>
        </v-avatar>
        <span class="body-2 font-weight-light d-inline-block message-line text-truncate">{{ message }}</span>
        <v-spacer />
      </v-card-title>
      <v-divider />
      <v-card-actions>
        <v-btn
          text
          color="primary"
          class="mx-auto"
          width="80%"
          @click="ok"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script lang="ts">
import mixins from 'vue-typed-mixins'
import { Common } from '~/mixins'
import { app } from '~/store'

export default mixins(Common).extend({
  computed: {
    enabled() {
      return app.confirmDialog.enabled
    },
    status() {
      return app.confirmDialog.status
    },
    message() {
      return app.confirmDialog.message
    },
  },
  methods: {
    ok() {
      app.offConfirmDialog()
    }
  }
})
</script>


<style scoped lang="scss">
</style>
