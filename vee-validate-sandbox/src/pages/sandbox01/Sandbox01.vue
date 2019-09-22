<template>
  <div>
    <div>
      <ValidationProvider rules="secret" v-slot="{ errors }">
        <input v-model="value1" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </div>

    <div>
      <ValidationProvider rules="maxLength:4" v-slot="{ errors }">
        <input v-model="value2" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </div>

    <div>
      <ValidationProvider rules="minLength:2|maxLength:4" v-slot="{ errors }" :skipIfEmpty="false">
        <input v-model="value3" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider rules="minLength:2|maxLength:4" v-slot="{ errors }">
        <input v-model="value3" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </div>

    <div>
      <ValidationProvider rules="myOneOf:a,b,c,d,e,f,g" v-slot="{ errors }">
        <input v-model="value4" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </div>


    <div>
      <ValidationProvider name="Taro" rules="hey" v-slot="{ errors }">
        <input v-model="value5" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </div>

    <div>
      <ValidationProvider name="Taro" rules="hey2" v-slot="{ errors }">
        <input v-model="value6" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sandbox01",
  data: () => ({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: ""
  })
};
</script>