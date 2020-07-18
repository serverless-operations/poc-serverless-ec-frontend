<template>
  <v-app>
    <v-main class="wrap-main">
      <v-container fill-height>
        <v-row justify="center">
          <nuxt />
        </v-row>
      </v-container>
    </v-main>

    <v-overlay
      :absolute="true"
      :value="isPageLoading"
      class="text-center"
    >
      <v-progress-circular
        :size="120"
        color="white"
        indeterminate
        class="mb-3"
      />
      <br>
      <span>{{ pageLoadingText }}</span>
    </v-overlay>
    <result-dialog />
  </v-app>
</template>


<script lang="ts">
import mixins from 'vue-typed-mixins'
import { Common } from '~/mixins'
import ResultDialog from '~/components/ResultDialog.vue'
import { app } from '~/store'

export default mixins(Common).extend({
  components: {
    ResultDialog
  },
  computed: {
    isPageLoading() {
      return app.pageLoading.enabled
    },
    pageLoadingText() {
      return app.pageLoading.message
    }
  }
})
</script>


<style scoped lang="scss">
.wrap-main {
  height: 100vh;
}

</style>
