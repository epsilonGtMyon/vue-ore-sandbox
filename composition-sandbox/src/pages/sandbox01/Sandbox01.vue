<template>
  <div>
    テキトーに
    <div>
      <button @click="incrementState">incrementState</button>
      {{ state.count }}:{{ double }}
    </div>
    <div>
      <button @click="incrementRef">incrementRef</button>
      {{ count }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  onMounted,
  reactive,
  computed,
  watch,
  ref
} from '@vue/composition-api';

export default createComponent({
  setup() {
    onMounted(()=>{
      console.log("mounted")
      console.log(state)
    })
    const state = reactive({
      count: 0
    });

    const count = ref(0);
    //----
    //
    function incrementState() {
      state.count++;
    }
    function incrementRef() {
      count.value++;
    }

    const double = computed(() => state.count * 2);

    watch(() => {
      console.log('c:' + count);
    });
    watch(() => {
      console.log('s:' + state.count);
    });

    return {
      state,
      count,
      double,
      incrementState,
      incrementRef
    };
  }
});
</script>
