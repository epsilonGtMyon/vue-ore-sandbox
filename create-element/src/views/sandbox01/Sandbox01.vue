<script lang="ts">
import Vue from "vue";

//とりあえずspanを書いてみる
export default Vue.extend({
  name: "Sandbox01",
  render(h) {
    return h("span", { attrs: { title: "テスト" } }, ["test"]);
  },
});
</script>