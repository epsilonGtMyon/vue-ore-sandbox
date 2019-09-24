<template>
  <div>
    <!-- それぞれどのようなタグが出力されるか確認！ -->

    <!--
      <span>x01</span>が出力される
      残りはhogeというスロットなので対象外
    -->
    <DateProvider01>
      <template #hoge>xhoge</template>
      <template v-slot="x">
        <span>x01:{{x}}</span>
      </template>
    </DateProvider01>
    <hr />

    <!--
      1つめの<span>x01</span>のみ出力
    -->
    <DateProvider01 v-slot="x">
      <span>x01:{{x}}</span>
      <span>x02:{{x}}</span>
    </DateProvider01>
    <hr />
    
    <!--
      <div></div>が出力
    -->
    <DateProvider01 v-slot="x">
      <div>
        <span>x01</span>
        <span>x02</span>
        <span>{{x}}</span>
      </div>
    </DateProvider01>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import DateProvider01 from '@/components/DateProvider01.vue'
@Component({
  components: {
    DateProvider01,
  },
})
export default class Sandbox02 extends Vue {}
</script>