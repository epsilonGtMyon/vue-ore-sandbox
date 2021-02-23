<template>
  <drop-zone
    :class="computedClass"
    style="height: 100%"
    @drop="drop"
    @dragenter="dragenter"
    @dragleave="dragleave"
  >
    {{dragging}}
    <div v-for="(r, index) in records" :key="index">
      <div>{{ r.itemType }}: {{ r.text }}</div>
    </div>
  </drop-zone>
</template>

<script lang="ts">
import Vue from "vue";
import DropZone from "./DropZone.vue";

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
  },
  data(): DataType {
    return {
      dragging: false,
      records: [],
    };
  },
  methods: {
    drop(event: DragEvent) {
      this.dragging = false;
      event.preventDefault();
      const data = extractData<RecordType>(event);
      if (data) {
        this.records.push(data);
      }
    },
    dragenter() {
      this.dragging = true;
    },
    dragleave() {
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