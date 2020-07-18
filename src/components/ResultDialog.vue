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
      <v-card-title>
        <div class="subtitle-1 blue pa-1 result-dialog-title text-center">
          <span class="white--text">購入結果</span>
        </div>
      </v-card-title>
      <v-card-text>
        <v-row class="pl-6">
          <v-col cols="3">
            <v-subheader class="caption">
              User ID
            </v-subheader>
          </v-col>
          <v-col
            cols="9"
            class="my-auto"
          >
            {{ data.id }}
          </v-col>
        </v-row>
        <v-row class="mt-n6 pl-6">
          <v-col cols="3">
            <v-subheader class="caption">
              Status
            </v-subheader>
          </v-col>
          <v-col
            cols="9"
            class="my-auto"
          >
            <span v-if="data.status">{{ data.status }}</span>

            <v-progress-circular
              v-else
              indeterminate
              :size="30"
              color="primary"
            />
          </v-col>
        </v-row>
        <v-row class="mt-n6 pl-6">
          <v-col cols="3">
            <v-subheader class="caption">
              Message
            </v-subheader>
          </v-col>
          <v-col
            cols="9"
            class="my-auto"
          >
            {{ data.message || '購入結果の通知を待っています...' }}
          </v-col>
        </v-row>
      </v-card-text>
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
      return app.resultDialog.enabled
    },
    data() {
      return app.resultDialog.data
    }
  },
  methods: {
    ok() {
      app.offResultDialog()
    }
  }
})
</script>


<style scoped lang="scss">
.result-dialog-title {
  width: 100%
}
</style>
