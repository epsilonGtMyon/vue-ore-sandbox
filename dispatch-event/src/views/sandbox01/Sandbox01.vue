<template>
  <div class="sandbox01">
    直接divをつかってイベントを受け取る
    <div class="hoge-listener" @hoge="doHoge1">hoge1:{{ hoge1 }}</div>
    <div class="hoge-listener" @hoge="doHoge2">hoge2:{{ hoge2 }}</div>
    <div class="foo-listener" @hoge="doHoge3">hoge3(ここは反応しない):{{ hoge3 }}</div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Sandbox01",
  data() {
    return {
      hoge1: 0,
      hoge2: 0,
      hoge3: 0,
    };
  },
  methods: {
    doHoge1() {
      this.hoge1++;
    },
    doHoge2() {
      this.hoge2++;
    },
    doHoge3() {
      this.hoge3++;
    },
  },
});
</script>