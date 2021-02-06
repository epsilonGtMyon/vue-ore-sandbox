import { DirectiveOptions } from "vue";

const simpleOverlay: DirectiveOptions = {
  bind(el: HTMLElement) {
    const originalPosition = el.style.position;
    const elStyle = window.getComputedStyle(el);

    const onMouseEnter = () => {
      const div = document.createElement("div");
      if (elStyle.position === "static") {
        el.style.position = "relative";
      }

      div.classList.add("simple-overlay");
      //実際はcssでやるだろうが..
      div.style.position = "absolute";
      div.style.top = "0";
      div.style.bottom = "0";
      div.style.left = "0";
      div.style.right = "0";
      div.style.backgroundColor = "rgba(0, 0, 0, 0.2)";

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
