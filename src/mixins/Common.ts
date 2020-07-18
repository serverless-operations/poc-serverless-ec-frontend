import Vue from 'vue'

export const Common = Vue.extend({
  computed: {
    isMobileBreakpoint() {
      const { xs, sm } = this.$vuetify.breakpoint
      return xs || sm
    }
  }
})
