<template>
  <div>
    <button @click="toggle">とぐるー</button>

    <input type="text" v-focus />
    <div v-if="visible1">
      <div v-lifecycle>b</div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Sandbox01",
  data() {
    return { visible1: false };
  },
  methods: {
    toggle() {
      console.log("----");
      this.visible1 = !this.visible1;
    },
  },
});
</script>