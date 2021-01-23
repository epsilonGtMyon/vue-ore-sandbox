<template>
  <div>
    <SubComponent v-sandbox03 :pVal1="val1" />
    <div v-sandbox03>normal</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { sandbox03 } from "./sandbox03";
import SubComponent from "./SubComponent.vue";

export default Vue.extend({
  components: {
    SubComponent,
  },
  directives: {
    sandbox03,
  },
  data() {
    return {
      val1: "",
    };
  },
  mounted(){
      this.val1 = "x";
  }
});
</script>