<template>
  <div class="sandbox01">
    受信用のコンポーネントを作ってそれ経由
    <hoge-listener @hoge="doHoge1"> hoge1:{{ hoge1 }} </hoge-listener>
    <hoge-listener @hoge="doHoge2"> hoge2:{{ hoge2 }} </hoge-listener>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import HogeListener from "@/components/HogeListener.vue";

export default Vue.extend({
  name: "Sandbox01",
  components: {
    HogeListener,
  },
  data() {
    return {
      hoge1: 0,
      hoge2: 0,
    };
  },
  methods: {
    doHoge1() {
      this.hoge1++;
    },
    doHoge2() {
      this.hoge2++;
    },
  },
});
</script>