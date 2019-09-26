<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    factory: {
      required: true,
      type: Function as PropType<() => unknown>,
    },
  },
  provide() {
    return {
      localStore: this.factory(),
    }
  },
  render() {
    return this.$scopedSlots.default!({})![0]
  },
})
</script>