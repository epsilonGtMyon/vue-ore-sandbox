<template>
  <div>
    <input type="text" v-model="titleText" />
    <div class="title" v-title="titleText">タイトル</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { titleDirective } from "./titleDirective";

export default Vue.extend({
  name: "Sandbox02",
  directives: {
    title: titleDirective,
  },
  data() {
    return {
      titleText: "",
    };
  },
});
</script>

<style lang="scss" scoped>
.title {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
}
</style>