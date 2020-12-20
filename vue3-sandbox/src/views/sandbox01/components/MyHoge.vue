<template>
  <div>
    <input v-model="innerValue1" />
    <input v-model="innerValue2" />
    {{ value1 }}:{{ value2 }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  props: {
    value1: {
      type: String,
      required: true
    },
    value2: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    const innerValue1 = computed({
      get: () => props.value1,
      set: val => {
        context.emit("update:value1", val);
      }
    });

    const innerValue2 = computed({
      get: () => props.value2,
      set: val => {
        context.emit("update:value2", val);
      }
    });
    return {
      innerValue1,
      innerValue2
    };
  }
});
</script>
