<template>
  <div>
    Vue.observableをそのまま使う
    <div class="is-flex">
      <LeftView />
      <div style="width:1rem" />
      <RightView />
    </div>
    <div>{{localState}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LocalState from './LocalState'

import LeftView from './view/LeftView.vue'
import RightView from './view/RightView.vue'

@Component({
  components: {
    LeftView,
    RightView,
  },
})
export default class Sandbox01 extends Vue {
  get localState() {
    return LocalState
  }
}
</script>
