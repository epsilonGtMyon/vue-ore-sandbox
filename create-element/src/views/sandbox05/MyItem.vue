<template>
  <div>{{ value01 }}:{{value02}}</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value01: {
      type: String,
    },
    value02: {
      type: String,
      default: "x",
    },
  },
  name: "MyItem",
});
</script>