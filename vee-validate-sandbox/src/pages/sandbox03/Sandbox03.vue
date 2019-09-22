<template>
  <div>
    <ValidationObserver v-slot="xx" ref="vo">
      <ValidationProvider rules="maxLength:6" v-slot="{errors}" name="value01">
        <input type="text" v-model="value01" />
        <span>{{errors[0]}}</span>
      </ValidationProvider>

      <ValidationProvider rules="maxLength:3" v-slot="{errors}" name="value02">
        <input type="text" v-model="value02" />
        <span>{{errors[0]}}</span>
      </ValidationProvider>

      <div v-html="JSON.stringify(xx).replace(/,/g, ',<br/>')"></div>
    </ValidationObserver>

    <button @click="register">登録</button>
  </div>
</template>

<script>
export default {
  name: "Sandbox03",
  data: () => ({
    value01: "",
    value02: "12345"
  }),
  methods: {
    async register(){
      const isValid = await this.$refs.vo.validate();
      window.alert(`isValid:${isValid}`)
    }
  }
};
</script>