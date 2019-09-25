<template>
  <div class="area">
    <div>left</div>
    <b-field label="value01">
      <b-input v-model="value01"></b-input>
    </b-field>

    <b-field label="value02">
      <b-input v-model="value02"></b-input>
    </b-field>

    <b-field label="value03">{{value03}}</b-field>
    <b-field label="value04">{{value04}}</b-field>

    <b-button type="is-primary" @click="save">Save</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LocalState from '../LocalState'

@Component
export default class LeftView extends Vue {
  value01: string
  value02: string

  constructor() {
    super()
    this.value01 = ''
    this.value02 = ''
  }

  get value03() {
    return LocalState.value03
  }

  get value04() {
    return LocalState.value04
  }

  save() {
    LocalState.value01 = this.value01
    LocalState.value02 = this.value02
  }
}
</script>


<style lang="sass" scoped>
div.area
  width: 500px
  height: 400px
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2)
</style>