<template>
  <div>
    moduleA
    <div>
      <label>
        value01:
        <input type="number" v-model="value01" />
      </label>
    </div>
    <div>
      <label>
        value02:
        <input type="text" v-model="value02" />
      </label>
    </div>

    <hr />

    <button @click="register">register</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

type Data = {
  value01: string;
  value02: string;
};
export default Vue.extend({
  data(): Data {
    return {
      value01: "",
      value02: ""
    };
  },

  mounted() {
    const state = this.$store.state.moduleA;
    this.value01 = state.value01;
    this.value02 = state.value02;
  },

  methods: {
    register() {
      this.$store.commit("moduleA/setValues", {
        value01: Number(this.value01),
        value02: this.value02
      });
    }
  }
});
</script>