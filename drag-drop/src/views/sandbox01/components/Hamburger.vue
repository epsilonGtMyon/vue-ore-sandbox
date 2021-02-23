<template>
  <div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Hamburger",
});
</script>

<style lang="scss" scoped>
.hamburger {
  cursor: pointer;
  
  height: 20px;
  width: 20px;
  padding: 3px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    display: block;
    height: 2px;
    background-color: black;
  }
}
</style>