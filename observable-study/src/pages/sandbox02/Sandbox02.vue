<template>
  <LocalStoreProvider :factory="createLocalStore">
    <div>
      <h1 class="title">Vue.observableとprovide/injectを組み合わせる</h1>
      <div class="is-flex">
        <LeftView />
        <div style="width:1rem" />
        <RightView />
      </div>
    </div>
  </LocalStoreProvider>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LocalStoreProvider from '@/components/LocalStoreProvider.vue'

import { createLocalStore, LocalStore } from './localstore/LocalStore'
import LeftView from './view/LeftView.vue'
import RightView from './view/RightView.vue'

@Component({
  components: {
    LocalStoreProvider,
    LeftView,
    RightView,
  },
})
export default class Sandbox02 extends Vue {
  createLocalStore: () => LocalStore

  constructor() {
    super()
    this.createLocalStore = createLocalStore
  }
}
</script>
