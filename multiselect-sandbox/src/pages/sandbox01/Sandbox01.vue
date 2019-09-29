<template>
  <div>
    <b-field>
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

    <!--
    <hr />
    <Sandbox012 />
    -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import Sandbox012 from './Sandbox01_2.vue'

@Component({
  components: {
    Sandbox012,
  },
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