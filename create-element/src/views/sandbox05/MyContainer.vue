<script lang="ts">
import Vue from "vue";

//複数rootを返すためfunctional: trueで関数型コンポーネントにしている
//Vue3からは関数型コンポーネントがなくなる？
//Fragmentを代わりに使うようにする。
export default Vue.extend({
  name: "MyContainer",
  functional: true,
  render(h, { scopedSlots }) {
    //slotの中のVNodeの配列がとれる
    const defaults = scopedSlots.default(null);

    defaults?.forEach((comp) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const propsData = comp.componentOptions?.propsData as any;

      //propsにここで無理やり突っ込むこともできる
      propsData.value02 = "Containerで突っ込んだ";
    });

    // やろうと思えば並び替えることもできる。

    // 戻り値がVNodeのみでVNode[]を許可してないのでやむを得ずany
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return defaults as any;
  },
});
</script>