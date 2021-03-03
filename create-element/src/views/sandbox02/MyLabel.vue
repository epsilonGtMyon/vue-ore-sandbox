<template>
  <span>MyLabel</span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MyLabel",
  mounted() {
    console.log("sandbox02/MyLabel:mounted");
  },
  beforeDestroy() {
    console.log("sandbox02/MyLabel:beforeDestroy");
  },
});
</script>