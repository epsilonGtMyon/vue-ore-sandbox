import { DirectiveOptions } from "vue";

function asDragHandleHTMLElement(ev: DragEvent) {
  if (ev == null || ev.target == null) {
    return null;
  }
  const target = ev.target;
  if (!(target instanceof HTMLElement)) {
    return null;
  }
  //drag-handleの内部の要素になることがあるのでその対応
  const dragHandle = target.closest(".drag-handle");
  if (!(dragHandle instanceof HTMLElement)) {
    return null;
  }
  return dragHandle;
}
const draggable: DirectiveOptions = {
  inserted(el, binding) {
    const dragStart = (ev: DragEvent) => {
      const element = asDragHandleHTMLElement(ev);
      if (ev == null || element === null) {
        ev.preventDefault();
        return;
      }

      const draggable = element.closest(".draggable");
      if (draggable == null || !(draggable instanceof HTMLElement)) {
        ev.preventDefault();
        return;
      }

      if (ev.dataTransfer != null) {
        const x = element.offsetLeft - draggable.offsetLeft;
        const y = element.offsetTop - draggable.offsetTop;
        ev.dataTransfer.setDragImage(draggable, x, y);

        const json = JSON.stringify(binding.value(ev));
        ev.dataTransfer.setData("text/plain", json);
      }
    };

    el.addEventListener("dragstart", dragStart);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyEl = el as any;
    anyEl._dragStart = dragStart;
  },
  unbind(el) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyEl = el as any;
    const dragStart = anyEl._dragStart;
    el.removeEventListener("dragstart", dragStart);
  },
};

export { draggable };
