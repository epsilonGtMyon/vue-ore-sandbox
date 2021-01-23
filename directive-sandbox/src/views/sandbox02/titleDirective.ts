import { DirectiveOptions } from "vue";

//el, binding, vnode, oldVnode
const titleDirective: DirectiveOptions = {
  //直接htmlの属性を書き換えてみる
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
