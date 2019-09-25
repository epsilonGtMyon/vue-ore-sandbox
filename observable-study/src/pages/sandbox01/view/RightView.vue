<template>
  <div class="area">
    <div>right</div>

    <b-field label="value01">{{value01}}</b-field>
    <b-field label="value02">{{value02}}</b-field>
    <b-field label="value03">
      <b-input v-model="value03"></b-input>
    </b-field>

    <b-field label="value04">
      <b-input v-model="value04"></b-input>
    </b-field>

    <b-button type="is-primary" @click="save">Save</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LocalState from '../LocalState'

@Component
export default class RightView extends Vue {
  value03: string
  value04: string

  constructor() {
    super()
    this.value03 = ''
    this.value04 = ''
  }

  get value01() {
    return LocalState.value01
  }

  get value02() {
    return LocalState.value02
  }

  save() {
    LocalState.value03 = this.value03
    LocalState.value04 = this.value04
  }
}
</script>

<style lang="sass" scoped>
div.area
  width: 500px
  height: 400px
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2)
</style>