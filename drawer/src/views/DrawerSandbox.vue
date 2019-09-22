<template>
  <div>
    <Drawer v-model="visibleDrawer">ドロアーの中身</Drawer>
    <button @click="visibleDrawer=true">開く</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Drawer from "@/components/drawer/Drawer.vue";

@Component({
  components: {
    Drawer
  }
})
export default class DrawerSandbox extends Vue {
  visibleDrawer: boolean;
  constructor() {
    super();
    this.visibleDrawer = false;
  }
}
</script>