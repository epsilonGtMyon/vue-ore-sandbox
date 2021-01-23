import { DirectiveOptions } from "vue";

//el, binding, vnode, oldVnode
const titleDirective: DirectiveOptions = {
  inserted(el, bindings) {
    const val = bindings.value;
    el.setAttribute("title", val);
  },
  update(el, bindings) {
    const val = bindings.value;
    el.setAttribute("title", val);
  },
};

export { titleDirective };
