<template>
  <div class="sandbox04">
    <div v-simple-overlay class="box box1">ssss</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { simpleOverlay } from "./simpleOverlay";
export default Vue.extend({
  name: "Sandbox04",
  directives: {
    simpleOverlay,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.sandbox04 {
  height: 1000px;

  .box {
    border: 1px solid black;

    &.box1 {
      width: 400px;
      height: 400px;
    }
  }
}
</style>