<template>
  <div>
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
    <div>
      <label>
        value03:
        <input type="text" v-model="value03" />
      </label>
    </div>

    <div>
      <label>
        nValue01:
        <input type="text" v-model="nValue01" />
      </label>
    </div>
    <div>
      <label>
        nValue02:
        <input type="text" v-model="nValue02" />
      </label>
    </div>

    <hr />

    <button @click="register">register</button>
    <button @click="clear">clear</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

type Data = {
  value01: string;
  value02: string;
  value03: string;

  nValue01: string;
  nValue02: string;
};
export default Vue.extend({
  data(): Data {
    return {
      value01: "",
      value02: "",
      value03: "",

      nValue01: "",
      nValue02: ""
    };
  },

  mounted() {
    const state = this.$store.state;
    this.value01 = state.value01;
    this.value02 = state.value02;
    this.value03 = state.value03.join(",");

    this.nValue01 = state.nest.nValue01;
    this.nValue02 = state.nest.nValue02;
  },

  methods: {
    register() {
      this.$store.commit("setValues", {
        value01: Number(this.value01),
        value02: this.value02,
        value03: this.value03.split(","),
        nValue01: this.nValue01,
        nValue02: this.nValue02
      });
    },
    clear() {
      window.localStorage.removeItem("hello-key");
    }
  }
});
</script>