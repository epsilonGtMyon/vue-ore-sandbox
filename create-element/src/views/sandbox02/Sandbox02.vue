<script lang="ts">
import Vue from "vue";
import MyLabel from "./MyLabel.vue";

//コンポーネントを描画してみる
export default Vue.extend({
  name: "Sandbox02",
  render(h) {
    return h(MyLabel);
  },
});
</script>