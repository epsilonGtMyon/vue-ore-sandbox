<template>
  <div class="sandbox04">
    あえてディレクティブで作ってみる
    <div v-simple-overlay class="box box1">ssss</div>
    <div v-simple-overlay2.danger="message" class="box box2">ssss</div>
    <div v-simple-overlay2.warn="message" class="box box2">ssss</div>
    <div v-simple-overlay2.info="message" class="box box2">ssss</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { simpleOverlay } from "./simpleOverlay";
import { simpleOverlay2 } from "./simpleOverlay2";
export default Vue.extend({
  name: "Sandbox04",
  directives: {
    simpleOverlay,
    simpleOverlay2,
  },
  data() {
    return {
      message: "",
      timerId: -1,
    };
  },
  mounted() {
    this.timerId = setInterval(() => {
      this.message = "Message:" + new Date().toLocaleString();
    }, 1000);
  },
});
</script>

<style lang="scss" scoped>
.sandbox04 {
  height: 1000px;

  .box {
    border: 1px solid black;

    &.box1 {
      width: 300px;
      height: 300px;
      background-color: yellow;
    }
    &.box2 {
      width: 300px;
      height: 300px;
      background-color: greenyellow;
    }
  }
}
</style>

<style lang="scss">
.simple-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.simple-overlay2 {
  @extend .simple-overlay;

  display: none;
  &.is-active {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .message {
    padding: 1rem;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    &.danger {
      background-color: red;
      color: white;
    }
    &.warn {
      background-color: yellow;
      color: black;
    }
    &.info {
      background-color: blue;
      color: white;
    }
  }
}
</style>