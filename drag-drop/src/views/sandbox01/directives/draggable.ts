import { DirectiveOptions } from "vue";

function asHTMLElement(ev: DragEvent) {
  if (ev == null || ev.target == null) {
    return null;
  }
  const target = ev.target;
  if (!(target instanceof HTMLElement)) {
    return null;
  }
  return target;
}
const draggable: DirectiveOptions = {
  inserted(el, binding) {
    const dragStart = (ev: DragEvent) => {
      const element = asHTMLElement(ev);
      if (ev == null || element === null) {
        ev.preventDefault();
        return;
      }
      if (!element.classList.contains("drag-handle")) {
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
