<template>
  <v-col
    :cols="colsSize"
  >
    <v-row justify="center">
      <v-progress-circular
        indeterminate
        :size="120"
        class="my-6"
        color="primary"
      />
    </v-row>
    <v-row justify="center">
      <p class="my-6 text-center">
        {{ primaryMessage }}<br>{{ subMessage }}
      </p>
    </v-row>
  </v-col>
</template>


<script lang="ts">
import mixins from 'vue-typed-mixins'
import { Common } from '~/mixins'

export default mixins(Common).extend({
  props: {
    primaryMessage: {
      required: true,
      type: String
    },
    subMessage: {
      required: true,
      type: String
    }
  },
  computed: {
    colsSize() {
      return this.isMobileBreakpoint ? '10' : '6'
    }
  }
})
</script>


<style scoped lang="scss">
.callback-progress-bar {
  width: 180px;
}
</style>
