<template>
  <div>
    (例より)関数として別ファイルに切り出して再利用
    ({{ x }}, {{ y }})
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';

import useMousePosition from './useMousePosition';

export default createComponent({
  setup() {
    const { x, y } = useMousePosition();

    return {
      x,
      y
    };
  }
});
</script>
