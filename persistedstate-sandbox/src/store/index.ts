import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import moduleA from "./moduleA"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleA
  },
  state: {
    value01: 0,
    value02: '',
    value03: ['1', '2'],

    nest: {
      nValue01: '',
      nValue02: ''
    }
  },
  mutations: {
    setValues(
      state,
      payload: {
        value01: number;
        value02: string;
        value03: string[];
        nValue01: string;
        nValue02: string;
      }
    ) {
      state.value01 = payload.value01;
      state.value02 = payload.value02;
      state.value03 = payload.value03;

      state.nest = {
        nValue01: payload.nValue01,
        nValue02: payload.nValue02
      };
    }
  },
  actions: {},
  plugins: [
    createPersistedState({
      key: 'hello-key',
      paths: ['value01', 'value02', 'value03', "nest"
              , "moduleA.value01", "moduleA.value02"]
    })
  ]
});
