import Vue from 'vue'

export type LocalStore = {
  readonly value01: string
  readonly value02: string
  readonly value03: string
  readonly value04: string

  setValue01: (value01: string) => void
  setValue02: (value02: string) => void
  setValue03: (value03: string) => void
  setValue04: (value04: string) => void
}

export function createLocalStore() {
  const localState = Vue.observable({
    value01: '',
    value02: '',
    value03: '',
    value04: '',
  })

  const localStore: LocalStore = {
    //-------
    //getters
    get value01() {
      return localState.value01
    },
    get value02() {
      return localState.value02
    },
    get value03() {
      return localState.value03
    },
    get value04() {
      return localState.value04
    },

    //-------
    //mutations
    setValue01(value01: string) {
      localState.value01 = value01
    },
    setValue02(value02: string) {
      localState.value02 = value02
    },
    setValue03(value03: string) {
      localState.value03 = value03
    },
    setValue04(value04: string) {
      localState.value04 = value04
    },
  }

  return localStore
}
