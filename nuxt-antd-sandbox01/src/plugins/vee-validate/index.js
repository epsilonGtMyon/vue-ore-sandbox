import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

extend('maxLength', {
  params: [{ name: 'max', cast: val => Number(val) }],
  validate(value, params) {
    if (value == null || value == '') {
      return true;
    }
    return value.length <= params.max;
  },
  message:'{max}文字以下で入力してください。'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
