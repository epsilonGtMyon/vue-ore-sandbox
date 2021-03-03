<script lang="ts">
import Vue from "vue";
import MyLabel from "./MyLabel.vue";

//コンポーネントにいろいろ渡してみる
export default Vue.extend({
  name: "Sandbox03",
  render(h) {
    return h(MyLabel, {
      scopedSlots: {
        default: () => h("span", "abcde"),
      },
      on: {
        click(ev: MouseEvent) {
          window.alert(JSON.stringify(ev))
        },
      },
    });
  },
});
</script>