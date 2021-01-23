import { DirectiveOptions } from "vue";

const sandbox03: DirectiveOptions = {
  //vnodeからコンポーネントを参照してみる
  update(el, bindings, vnode) {
    const componentInstance = vnode.componentInstance;
    if (!componentInstance) {
      //divなどのvueではないものにつけてたらココ
      return;
    }
    //anyで乱暴だけどcomponentInstanceが参照できるので
    //こーいうのができるみたい

    /* eslint-disable @typescript-eslint/no-explicit-any */
    (componentInstance as any).val1 = "aa";
    (componentInstance as any).xxx();
    /* eslint-enable @typescript-eslint/no-explicit-any */
  },
};

export { sandbox03 };
