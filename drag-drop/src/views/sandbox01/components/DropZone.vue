<template>
  <div
    class="drop-zone"
    :class="computedClass"
    @dragover.prevent
    @drop.capture="resetCounter"
    @drop="emitDrop"
    @dragenter="dragenter"
    @dragleave="dragleave"
  >
    <slot :dragging="dragging"> </slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

type DropZoneData = {
  counter: number;
};
export default Vue.extend({
  data(): DropZoneData {
    return {
      // 要素が入れ子の場合、
      // 子要素のdragenter → 自分のdragleave
      // というイベントが発生するので
      // それにうまく対応するための 変数
      counter: 0,
    };
  },
  methods: {
    resetCounter() {
      //カウンター消すのはキャプチャーでする
      this.counter = 0;
    },
    emitDrop(event: DragEvent) {
      this.$emit("drop", event);
    },
    //------------------------------
    dragenter(event: DragEvent) {
      if (this.counter === 0) {
        //counter=0 とは この要素に入った時の事
        this.$emit("dragenter", event);
      }
      this.counter++;
    },
    dragleave(event: DragEvent) {
      this.counter--;
      if (this.counter === 0) {
        //counter=0 とは この要素を抜けるときの事
        //子要素に移動するときは 一度 counterが2になってから dragleaveが呼ばれる
        this.$emit("dragleave", event);
      }
    },
  },
  computed: {
    dragging(): boolean {
      return this.counter > 0;
    },
    computedClass(): string[] {
      const classes: string[] = [];
      if (this.dragging) {
        classes.push("is-active");
      }
      return classes;
    },
  },
});
</script>

<style lang="scss" scoped>
</style>