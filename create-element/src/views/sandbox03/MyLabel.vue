<template>
  <span @click="emitClick">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MyLabel",
  methods: {
    emitClick(ev: MouseEvent) {
      this.$emit("click", ev);
    },
  },
});
</script>