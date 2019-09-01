type ModuleAState = {
  value01: number;
  value02: string;
};

export default {
  namespaced: true,
  state: {
    value01: 0,
    value02: ''
  } as ModuleAState,
  mutations: {
    setValues(
      state: ModuleAState,
      payload: {
        value01: number;
        value02: string;
      }
    ) {
      state.value01 = payload.value01;
      state.value02 = payload.value02;
    }
  },
  actions: {}
};
