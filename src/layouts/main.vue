<template>
  <v-app>
    <v-main :class="isMobileBreakpoint ? 'wrap-main-mobile' : 'wrap-main-pc'">
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
    <confirm-dialog />
  </v-app>
</template>


<script lang="ts">
import mixins from 'vue-typed-mixins'
import { Common } from '~/mixins'
import ConfirmDialog from '~/components/ConfirmDialog.vue'
import { app } from '~/store'

export default mixins(Common).extend({
  components: {
    ConfirmDialog
  },
  computed: {
    isPageLoading() {
      return app.pageLoading.enabled
    },
    pageLoadingText() {
      return app.pageLoading.message
    }
    //
  },
  created() {
    //
  },
  methods: {
    //
  }
})
</script>


<style scoped lang="scss">
%wrap-main {
  // background-color: rgba(255,255,255,0.8);
  // background-blend-mode: lighten;
  height: 100vh;
  // background-size: cover;
  // background-attachment: fixed;
}
.wrap-main-pc {
  @extend %wrap-main;
  // background-image: url('../assets/img/page_bg_pc.jpg');
}

.wrap-main-mobile {
  @extend %wrap-main;
  // background-image: url('../assets/img/page_bg_mobile.jpg');
}
</style>
