import { DirectiveOptions } from "vue";

function isArrowKey(ev: KeyboardEvent) {
  switch (ev.key) {
    case "ArrowUp":
    case "ArrowDown":
    case "ArrowLeft":
    case "ArrowRight":
      return true;
  }
  return false;
}

function isNumberKey(ev: KeyboardEvent) {
  if (/^\d$/.test(ev.key)) {
    return true;
  }
  return false;
}
function isBackspace(ev: KeyboardEvent) {
  return ev.key === "Backspace";
}

function isDelete(ev: KeyboardEvent) {
  return ev.key === "Delete";
}
function isTab(ev: KeyboardEvent) {
  return ev.key === "Tab";
}

const numOnly: DirectiveOptions = {
  inserted(el) {
    //TODO IMEがONのときの対策しないと全角はいっちゃう
    const keydownHandler = (ev: Event) => {
      const keyEv = ev as KeyboardEvent;
      if (isNumberKey(keyEv)) {
        //none
      } else if (isArrowKey(keyEv)) {
        //none
      } else if (isBackspace(keyEv)) {
        //none
      } else if (isDelete(keyEv)) {
        //none
      } else if (isTab(keyEv)) {
        //none
      } else if (keyEv.ctrlKey) {
        //none
      } else {
        ev.preventDefault();
      }
    };

    const pasteHandler = (ev: Event) => {
      const cbEv = ev as ClipboardEvent;
      const pasteText = cbEv.clipboardData?.getData("text");

      if (pasteText == null || /^\d+/.test(pasteText)) {
        //ok
      } else {
        ev.preventDefault();
      }
    };

    el.addEventListener("keydown", keydownHandler, false);
    el.addEventListener("paste", pasteHandler, false);
  },
};

export { numOnly };
