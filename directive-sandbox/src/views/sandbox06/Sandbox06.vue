<template>
  <div class="sandbox06">
    数値だけ入力許可
    <input type="text" v-model="text01" v-num-only />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { numOnly } from "./numOnly";
export default Vue.extend({
  name: "Sandbox06",
  directives: {
    numOnly,
  },
  data() {
    return {
      text01: "",
    };
  },
});
</script>