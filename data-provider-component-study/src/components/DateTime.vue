<template>
  <span>
    <slot :dateTime="dateTime"></slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DateTime extends Vue {
  dateTime: Date;

  id: number | null;

  constructor() {
    super();
    this.dateTime = new Date();
    this.id = null;
  }

  mounted() {
    this.id = setInterval(() => {
      this.dateTime = new Date();
    }, 500);
  }

  beforeDestroy() {
    if (this.id != null) {
      clearInterval(this.id);
    }
  }
}
</script>