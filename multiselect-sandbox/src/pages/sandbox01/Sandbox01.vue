<template>
  <div>
    <multiselect v-model="value01" :options="options01"></multiselect>
    {{this.value01}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Sandbox01 extends Vue {
  value01!: string
  options01!: string[]

  constructor() {
    super()
    this.value01 = ''
    this.options01 = ['aaa', 'bbb']
  }
}
</script>