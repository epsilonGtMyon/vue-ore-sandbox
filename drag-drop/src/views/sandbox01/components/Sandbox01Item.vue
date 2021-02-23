<template>
  <div
    class="sandbox01-item draggable"
    :class="computedClass"
    v-draggable="dragStart"
  >
    {{ text }}
    <div class="drag-handle" draggable="true">
      <hamburger />
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Hamburger from "./Hamburger.vue";
import { draggable } from "../directives/draggable";

export default Vue.extend({
  name: "Sandbox01Item",
  components: {
    Hamburger,
  },
  directives: {
    draggable,
  },
  props: {
    itemType: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    dragStart() {
      return {
        itemType: this.itemType,
        text: this.text,
      };
    },
  },
  computed: {
    computedClass() {
      const classes: string[] = [];
      classes.push(`sandbox01-item-type${this.itemType}`);
      return classes;
    },
  },
});
</script>

<style lang="scss" scoped>
.sandbox01-item {
  height: 100px;
  width: 200px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
}
.sandbox01-item-type1 {
  background-color: rgb(220, 180, 180);
}
.sandbox01-item-type2 {
  background-color: rgb(180, 220, 180);
}
.sandbox01-item-type3 {
  background-color: rgb(180, 180, 220);
}
</style>