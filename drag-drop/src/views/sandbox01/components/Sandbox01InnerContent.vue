<template>
  <drop-zone
    style="height: 100%"
    @drop="drop"
    @dragenter="dragenter"
    @dragleave="dragleave"
  >
    <div style="height: 100px; width: 100px; background-color: red"></div>
  </drop-zone>
</template>


<script lang="ts">
import Vue from "vue";
import DropZone from "./DropZone.vue";
export default Vue.extend({
  name: "Sandbox01InnerContent",
  components: {
    DropZone,
  },
  data() {
    return {
      dragging: false,
    };
  },
  methods: {
    drop(event: DragEvent) {
      event.stopPropagation();
      console.log("inner:drop");
      this.dragging = false;
    },
    dragenter() {
      console.log("inner:dragenter");
      this.dragging = true;
    },
    dragleave() {
      console.log("inner:dragleave");
      this.dragging = false;
    },
  },
});
</script>