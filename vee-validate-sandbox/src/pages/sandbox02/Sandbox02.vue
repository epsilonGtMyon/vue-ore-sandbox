<template>
  <div>
    <ValidationProvider rules="minLength:2|maxLength:4" v-slot="x">
      <input v-model="value01" type="text" />
      <span>{{x.errors[0]}}</span>
      <button @click="x.reset">xx</button>
      <div>{{JSON.stringify({ valid: x.valid, invalid: x.invalid, changed: x.changed, pristine: x.pristine, pending:x.pending })}}</div>
    </ValidationProvider>

    <ValidationProvider rules="minLength:2|maxLength:4" v-slot="{errors}" slim>
      <!-- 子が1つのときにslimが使える -->
      <section>
        <input v-model="value01" type="text" />
        <span>{{errors[0]}}</span>
      </section>
    </ValidationProvider>

    <div>
      <ValidationProvider
        rules="minLength:2|maxLength:4"
        ref="value02Input"
        v-slot="{ errors, reset }"
      >
        <input v-model="value02" type="text" />
        <span>{{ errors[0] }}</span>
        <button @click="reset">reset</button>
      </ValidationProvider>

      <button @click="validateField">Submit</button>
    </div>

    <!-- v-modelなし -->
    <ValidationProvider rules="minLength:2|maxLength:4" v-slot="{errors, validate}">
      <input type="text" @input="validate" />
      <span>{{errors[0]}}</span>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: "Sandbox02",
  data: () => ({
    value01: "",
    value02: ""
  }),
  methods: {
    validateField() {
      //手動で検証実行
      this.$refs.value02Input.validate();
    }
  }
};
</script>