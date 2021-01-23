import { DirectiveOptions } from "vue";

//el, binding, vnode, oldVnode
const lifecycle: DirectiveOptions = {
  bind() {
    console.log("bind");
  },
  inserted() {
    console.log("inserted");
  },
  update() {
    console.log("update");
  },
  componentUpdated() {
    console.log("componentUpdated");
  },
  unbind() {
    console.log("unbind");
  },
};

export { lifecycle };
