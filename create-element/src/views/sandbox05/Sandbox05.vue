<template>
  <div class="sandbox05">
    <my-container>
      <my-item value01="x"></my-item>
      <my-item value01="y"></my-item>
      <my-item value01="z"></my-item>
    </my-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyContainer from "./MyContainer.vue";
import MyItem from "./MyItem.vue";
export default Vue.extend({
  components: { MyContainer, MyItem },
  name: "Sandbox05",
});
</script>