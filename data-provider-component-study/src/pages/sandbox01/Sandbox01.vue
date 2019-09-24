<template>
  <div>
    <DateTime v-slot="{dateTime}">{{dateTime.toLocaleString()}}</DateTime>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DateTime from "@/components/DateTime.vue";
@Component({
  components: {
    DateTime
  }
})
export default class Sandbox01 extends Vue {}
</script>
