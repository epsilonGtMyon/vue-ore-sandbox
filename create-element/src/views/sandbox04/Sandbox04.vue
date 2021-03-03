<script lang="ts">
import Vue from "vue";
import { RecordType } from "./types";
import MyList from "./MyList.vue";

//コンポーネントで受け取ってイベントハンドラも
export default Vue.extend({
  name: "Sandbox04",
  methods: {
    outListKey(listKey: string) {
      console.log(listKey);
    },
  },
  render(h) {
    const records: RecordType[] = [];
    for (let i = 0; i < 10; i++) {
      records.push({
        key: String(i),
        text: `テキスト:${i}`,
        buttonText: `[${i}]`,
      });
    }

    return h("div", {}, [
      h(MyList, {
        props: {
          records,
        },
        on: {
          click2: (key: string) => {
            this.outListKey(key);
          },
        },
      }),
    ]);
  },
});
</script>