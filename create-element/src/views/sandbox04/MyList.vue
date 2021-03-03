<template>
  <ul>
    <template v-for="r in records">
      <li :key="r.key">
        {{ r.text }}
        <button @click="emitClick(r.key)">{{ r.buttonText }}</button>
      </li>
    </template>
  </ul>
</template>


<script lang="ts">
import Vue, { PropType } from "vue";
import { RecordType } from "./types";

export default Vue.extend({
  name: "MyList",
  props: {
    records: {
      type: Array as PropType<RecordType[]>,
      default: () => [],
    },
  },
  methods: {
    emitClick(key: string) {
      this.$emit("click2", key);
    },
  },
});
</script>