import { DirectiveOptions } from "vue";

const simpleOverlay: DirectiveOptions = {
  bind(el: HTMLElement) {
    const originalPosition = el.style.position;
    const elStyle = window.getComputedStyle(el);

    const onMouseEnter = () => {
      const div = document.createElement("div");
      div.classList.add("simple-overlay");
      
      if (elStyle.position === "static") {
        el.style.position = "relative";
      }


      el.appendChild(div);
    };
    const onMouseLeave = () => {
      el.style.position = originalPosition;

      const nodeList = el.querySelectorAll("div.simple-overlay");
      nodeList.forEach((x) => {
        x.remove();
      });
    };
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (el as any)._onMouseEnter = onMouseEnter;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (el as any)._onMouseLeave = onMouseLeave;
  },
  unbind(el) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onMouseEnter = (el as any)._onMouseEnter;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onMouseLeave = (el as any)._onMouseLeave;
    if (onMouseEnter) {
      el.removeEventListener("mouseenter", onMouseEnter);
    }
    if (onMouseLeave) {
      el.removeEventListener("mouseleave", onMouseLeave);
    }
  },
};

export { simpleOverlay };
