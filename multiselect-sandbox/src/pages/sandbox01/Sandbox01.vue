<template>
  <div>
    <b-field label="value01">
      <multiselect v-model="value01" :options="options01" :multiple="true" :closeOnSelect="false">
        <template v-slot:selection="{ values, search, isOpen }">
          <span
            class="multiselect__single"
            v-if="values.length && !isOpen"
          >{{ values.length }} options selected</span>
        </template>
      </multiselect>
    </b-field>
    <hr />
    {{value01}}
    <hr />

    <b-field label="value02">
      <multiselect
        v-model="value02"
        label="text"
        track-by="value"
        :options="options02"
        :multiple="true"
        :closeOnSelect="false"
        :searchable="false"
      ></multiselect>
    </b-field>
    <hr />
    {{value02}}
    <hr />

    <!--
    <hr />
    <Sandbox012 />
    -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import Sandbox012 from './Sandbox01_2.vue'

import SelectItem from './SelectItem'

@Component({
  components: {
    Sandbox012,
  },
})
export default class Sandbox01 extends Vue {
  value01: string
  value02: any
  options01!: string[]
  options02: SelectItem[]

  constructor() {
    super()
    this.value01 = ''
    this.value02 = ''
    this.options01 = ['aaa', 'bbb']
    this.options02 = [
      { value: '1', text: 'option01' },
      { value: '2', text: 'option02' },
      { value: '3', text: 'option03' },
      { value: '4', text: 'option04' },
    ]
  }
}
</script>