<template>
  <div>
    <ValidationProvider rules="secret" v-slot="{ errors }">
      <input v-model="email" type="text" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: "Sandbox01",
  data: () => ({
    email: ""
  })
};
</script>