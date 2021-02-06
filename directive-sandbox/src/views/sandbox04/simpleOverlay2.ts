import { DirectiveOptions } from "vue";

//メッセージつきオーバーレイ
const simpleOverlay2: DirectiveOptions = {
  bind(el, binding) {
    const originalPosition = el.style.position;
    const elStyle = window.getComputedStyle(el);

    const div = document.createElement("div");
    div.classList.add("simple-overlay2");

    //メッセージエリア
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.textContent = binding.value;
    if (binding.modifiers.danger) {
      messageDiv.classList.add("danger");
    } else if (binding.modifiers.warn) {
      messageDiv.classList.add("warn");
    } else if (binding.modifiers.info) {
      messageDiv.classList.add("info");
    }

    div.appendChild(messageDiv);
    el.appendChild(div);

    const onMouseEnter = () => {
      if (elStyle.position === "static") {
        el.style.position = "relative";
      }

      div.classList.add("is-active");
    };

    const onMouseLeave = () => {
      el.style.position = originalPosition;

      div.classList.remove("is-active");
    };

    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyEl = el as any;
    anyEl._onMouseEnter = onMouseEnter;
    anyEl._onMouseLeave = onMouseLeave;
  },
  unbind(el) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyEl = el as any;
    const onMouseEnter = anyEl._onMouseEnter;
    const onMouseLeave = anyEl._onMouseLeave;
    if (onMouseEnter) {
      el.removeEventListener("mouseenter", onMouseEnter);
    }
    if (onMouseLeave) {
      el.removeEventListener("mouseleave", onMouseLeave);
    }
  },
  update(el, binding) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mes = el.querySelector(".simple-overlay2 .message");
    if (mes) {
      mes.textContent = binding.value;
    }
  },
};

export { simpleOverlay2 };
