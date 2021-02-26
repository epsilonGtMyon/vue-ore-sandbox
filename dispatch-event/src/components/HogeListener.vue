<template>
  <div class="hoge-listener" @hoge="emitHoge">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HogeListener",
  methods: {
    emitHoge(event: Event) {
      this.$emit("hoge", event);
    },
  },
});
</script>