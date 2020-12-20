<template>
  <div>
    v-modelが複数指定できることの確認
    <my-hoge
      v-model:value1="state.value1"
      v-model:value2="state.value2"
    ></my-hoge>
    {{ stateText }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import MyHoge from "./components/MyHoge.vue";

type DataType = {
  value1: string;
  value2: string;
};

export default defineComponent({
  name: "Sandbox01",
  components: {
    MyHoge
  },
  setup() {
    const state = reactive<DataType>({
      value1: "",
      value2: ""
    });

    const stateText = computed(() => {
      return `${state.value1}:${state.value2}`;
    });

    return {
      state,
      stateText
    };
  }
});
</script>
