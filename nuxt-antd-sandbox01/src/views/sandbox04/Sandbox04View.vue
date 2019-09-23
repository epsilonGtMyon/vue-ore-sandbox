<template>
  <div>
    <ValidationProvider rules="maxLength:5" v-slot="{errors}">
      <a-form-item
        label="value01"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        :help="errors[0]"
        :validateStatus="errors.length > 0 ? 'error' : ''"
        hasFeedback
      >
        <a-input v-model="value01" />
      </a-form-item>
    </ValidationProvider>
    <ValidationProvider rules="maxLength:5" v-slot="{errors}">
      <a-form-item
        label="value02"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        :help="errors[0]"
        :validateStatus="errors.length > 0 ? 'error' : ''"
        hasFeedback
      >
        <a-input v-model="value02" />
      </a-form-item>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  data: () => ({
    value01: '',
    value02: '',
  }),
};
</script>
