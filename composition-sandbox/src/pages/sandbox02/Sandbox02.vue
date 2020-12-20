<template>
  <div>
    とりあえず関数で分けてみた
    <div>
      hoge01
      <input v-model="hoge01State.value" />
    </div>
    <div>
      hoge02
      <input v-model="hoge02State.value" />
    </div>
    <div>
      <button @click="hello">Hello</button>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api';
export default createComponent({
  setup() {
    const { hoge01State } = useHoge01();
    const { hoge02State } = useHoge02();
    const { hello } = useHello({ hoge01State, hoge02State });
    return {
      hoge01State,
      hoge02State,
      hello
    };
  }
});

function useHoge01() {
  const hoge01State = reactive({
    value: ''
  });

  return {
    hoge01State
  };
}

function useHoge02() {
  const hoge02State = reactive({
    value: ''
  });

  return {
    hoge02State
  };
}

function useHello({
  hoge01State,
  hoge02State
}: {
  hoge01State: any;
  hoge02State: any;
}) {
  function hello() {
    window.alert(`
${hoge01State.value}
${hoge02State.value}
`);
  }

  return {
    hello
  };
}
</script>
