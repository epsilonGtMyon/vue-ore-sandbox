<template>
  <div
    class="drop-zone"
    @dragover.prevent
    @drop.capture="drop"
    @dragenter="dragenter"
    @dragleave="dragleave"
  >
    {{ counter }}
    <slot> </slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    drop(event: DragEvent) {
      this.counter = 0;
      this.$emit("drop", event);
    },
    dragenter(event: DragEvent) {
      if (this.counter === 0) {
        this.$emit("dragenter", event);
      }
      this.counter++;
    },
    dragleave(event: DragEvent) {
      this.counter--;
      if (this.counter === 0) {
        this.$emit("dragleave", event);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
</style>