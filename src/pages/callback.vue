<template>
  <in-progress-panel
    primary-message="サインインしています。"
    sub-message="しばらくお待ちください。"
  />
</template>


<script lang="ts">
import Vue from 'vue'
import InProgressPanel from '~/components/InProgressPanel.vue'

export default Vue.extend({
  layout: 'main',
  components: { InProgressPanel }
})
</script>


<style scoped lang="scss">

</style>
