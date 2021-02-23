<template>
  <div
    class="drop-zone"
    @dragover.prevent
    @drop.capture="drop"
    @dragenter.capture="dragenter"
    @dragleave.capture="dragleave"
  >
    <slot> </slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    drop(event: DragEvent) {
      this.$emit("drop", event);
    },
    dragenter(event: DragEvent) {
      if (this.$el === event.target) {
        this.$emit("dragenter", event);
      }
    },
    dragleave(event: DragEvent) {
      //内側の要素に行くときもdragleaveが起きてしまう
      //event.targetはthis.$elだし..
      this.$emit("dragleave", event);
    },
  },
});
</script>

<style lang="scss" scoped>
</style>