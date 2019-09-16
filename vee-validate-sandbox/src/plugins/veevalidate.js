import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';

// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'Hello world error!'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
