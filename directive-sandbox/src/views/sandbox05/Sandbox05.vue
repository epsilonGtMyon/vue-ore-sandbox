<template>
  <div class="sandbox05">
    <div class="button-area">
      <button @click="incrementHogeCount">incrementHogeCount</button>
      <button @click="fireHoge">doHoge</button>
    </div>
    <div class="hoge-area">
      <div v-hoge="doHoge">a</div>
      <sandbox-05-comp-a v-hoge="doHoge">bbb</sandbox-05-comp-a>

      <hoge-component @hoge="doHoge"> ccc </hoge-component>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Hoge } from "./Hoge";
import HogeComponent from "./HogeComponent.vue";
import Sandbox05CompA from "./Sandbox05CompA.vue";

export default Vue.extend({
  name: "Sandbox05",
  directives: {
    Hoge,
  },
  components: {
    HogeComponent,
    Sandbox05CompA,
  },
  data() {
    return {
      hogeCount: 0,
    };
  },
  methods: {
    incrementHogeCount() {
      this.hogeCount++;
    },
    /**
     * カスタムイベントを発火する
     */
    fireHoge() {
      //hogeクラスはディレクティブの中で追加している
      const hoges = document.querySelectorAll(".hoge");

      const event = new CustomEvent<{ value: number }>("hoge", {
        bubbles: false, //バブルしたらわけわからなくなる
        cancelable: true, //preventDefaultできるようにするため
        detail: {
          value: this.hogeCount,
        },
      });
      for (let i = 0; i < hoges.length; i++) {
        const hoge = hoges[i];
        const ok = hoge.dispatchEvent(event);
        if (!ok) break;
      }
    },
    doHoge(event: Event) {
      const ev = event as CustomEvent<{ value: number }>;
      //event.preventDefault();
      console.log("doHoge");
      console.log(ev);
      console.log(ev.detail.value);
    },
  },
  computed: {
    computedClassNames() {
      const classes: string[] = [];
      classes.push(`xxx-${this.hogeCount}`);
      return classes;
    },
  },
});
</script>
<style lang="sass" scoped>
.sandbox05
  height: 800px
  display: flex

  .button-area
    box-shadow: 0px 0px 2px 0px black

    .hoge-area
      box-shadow: 0px 0px 2px 0px black
</style>