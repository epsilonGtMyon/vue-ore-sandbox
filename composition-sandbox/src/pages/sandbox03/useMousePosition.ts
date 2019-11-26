import { ref, onMounted, onUnmounted, toRefs, reactive} from '@vue/composition-api';

export default function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(ev: MouseEvent) {
    x.value = ev.x;
    y.value = ev.y;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { x, y };
}