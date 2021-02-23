<template>
  <div class="sandbox01">
    <div class="sandbox01-items">
      <sandbox-01-item itemType="1" text="アイテム１" />
      <sandbox-01-item itemType="2" text="アイテム２" />
      <sandbox-01-item itemType="3" text="アイテム３" />
    </div>
    <div class="sandbox01-contents">
      <sandbox-01-content />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Sandbox01Item from "./components/Sandbox01Item.vue";
import Sandbox01Content from "./components/Sandbox01Content.vue";
export default Vue.extend({
  components: { Sandbox01Item, Sandbox01Content },
  name: "Sandbox01",
});
</script>

<style lang="scss" scoped>
.sandbox01 {
  height: 100%;

  .sandbox01-items {
    display: flex;
  }

  .sandbox01-contents {
    height: 80%;
    border: 1px solid black;
  }
}
</style>