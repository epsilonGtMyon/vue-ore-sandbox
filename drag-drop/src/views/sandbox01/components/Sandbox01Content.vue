<template>
  <drop-zone
    :class="computedClass"
    style="height: 100%"
    @drop="drop"
    @dragenter="dragenter"
    @dragleave="dragleave"
  >
    <div v-for="(r, index) in records" :key="index">
      <div>{{ r.itemType }}: {{ r.text }}</div>
    </div>

    <sandbox-01-inner-content/>
  </drop-zone>
</template>

<script lang="ts">
import Vue from "vue";
import DropZone from "./DropZone.vue";
import Sandbox01InnerContent from "./Sandbox01InnerContent.vue";

function extractData<T>(event: DragEvent) {
  try {
    if (event.dataTransfer != null) {
      const text = event.dataTransfer.getData("text/plain");
      return JSON.parse(text) as T;
    }
    return null;
  } catch (e) {
    return null;
  }
}

type RecordType = {
  itemType: string;
  text: string;
};
type DataType = {
  dragging: boolean;
  records: RecordType[];
};
export default Vue.extend({
  name: "Sandbox01Content",
  components: {
    DropZone,
    Sandbox01InnerContent,
  },
  data(): DataType {
    return {
      dragging: false,
      records: [],
    };
  },
  methods: {
    drop(event: DragEvent) {
      console.log("content:drop");
      this.dragging = false;
      const data = extractData<RecordType>(event);
      if (data) {
        this.records.push(data);
      }
    },
    dragenter() {
      console.log("content:dragenter");
      this.dragging = true;
    },
    dragleave() {
      console.log("content:dragleave");
      this.dragging = false;
    },
  },
  computed: {
    computedClass() {
      const classes: string[] = [];
      if (this.dragging) {
        classes.push("dragging");
      }
      return classes;
    },
  },
});
</script>