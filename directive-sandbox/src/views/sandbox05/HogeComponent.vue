<template>
  <div class="hoge">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

/**
 * hogeカスタムイベントを受け取って発火するだけのコンポーネント
 */
export default Vue.extend({
  name: "HogeComponent",
  mounted() {
    this.$el.addEventListener("hoge", this.emitHoge);
  },
  beforeDestroy() {
    this.$el.removeEventListener("hoge", this.emitHoge);
  },
  methods: {
    emitHoge(event: Event) {
      this.$emit("hoge", event);
    },
  },
});
</script>