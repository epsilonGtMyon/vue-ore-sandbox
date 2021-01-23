<template>
  <div>
    Sandbox03-SubComponent
    <div>{{ val1 }}:{{ pVal1 }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SubComponent",
  props: {
    pVal1: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      val1: "111",
    };
  },
  methods: {
    xxx() {
      console.log("xxxx");
    },
  },
});
</script>