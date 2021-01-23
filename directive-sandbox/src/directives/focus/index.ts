import { DirectiveOptions } from "vue";

//el, binding, vnode, oldVnode
const focus: DirectiveOptions = {
  //定番のfocus
  
  inserted(el) {
    if (el instanceof HTMLInputElement) {
      //ok
    } else if (el instanceof HTMLTextAreaElement) {
      //ok
    } else {
      return;
    }
    el.focus();
  },
};

export { focus };
