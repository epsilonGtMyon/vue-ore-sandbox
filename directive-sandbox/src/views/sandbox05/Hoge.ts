import { DirectiveOptions } from "vue/types/umd";

/**
 * classにhogeをなければ追加
 * @param el
 */
function appendHogeClass(el: HTMLElement) {
  if (el.classList.contains("hoge")) {
    return;
  }
  el.classList.add("hoge");
}

/**
 * hogeイベントを受け取って受け取った関数を実行するディレクティブ
 */
const Hoge: DirectiveOptions = {
  inserted(el, binding) {
    const onHoge = (event: Event) => {
      const ev = event as CustomEvent;
      binding.value(ev);
    };

    el.addEventListener("hoge", onHoge);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyEl = el as any;
    anyEl._onHoge = onHoge;

    //発火するための要素を見つけるためにhogeクラスを追加
    appendHogeClass(el);
  },
  unbind(el) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyEl = el as any;
    const onHoge = anyEl._onHoge;
    if (onHoge) {
      el.removeEventListener("hoge", onHoge);
    }
  },
  update(el) {
    //insertedで追加したものが、アップデート時に消えてるので
    appendHogeClass(el);
  },
};

export { Hoge };
