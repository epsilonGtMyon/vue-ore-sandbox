<template>
  <div id="app">
    <div id="nav">
      <div>
        <button @click="fireGlobalHoge">FireGlobalHoge</button>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/sandbox01">Sandbox01</router-link> |
      <router-link to="/sandbox02">Sandbox02</router-link>
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  methods: {
    /**
     * hogeイベントを実行する
     */
    fireGlobalHoge() {
      //発火対象としてhoge-listener というクラスがついたものを抽出
      const hogeListenerNodes = document.querySelectorAll(".hoge-listener");

      const ev = new CustomEvent("hoge", {
        bubbles: false,
        cancelable: true,
      });
      for (const hogeNode of hogeListenerNodes) {
        //preventDefaultされたら止める
        const pass = hogeNode.dispatchEvent(ev);
        if (!pass) {
          break;
        }
      }
    },
  },
});
</script>
<style lang="scss">
</style>
