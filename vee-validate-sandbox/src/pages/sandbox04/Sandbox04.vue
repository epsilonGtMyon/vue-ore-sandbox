<template>
  <div>
    <ValidationObserver ref="vo" v-slot="xx">
      <template v-for="(record, index) in records">
        <div :key="record.key" class="row">
          <div class="col-1">{{index+1}}</div>
          <div class="col-4">
            <ValidationProvider rules="maxLength:5" v-slot={errors}>
              <input type="text" v-model="record.name"/>
              <div>{{errors[0]}}</div>
            </ValidationProvider>
          </div>
          <div class="col-4">
            <button @click="remove(index)">remove</button>
          </div>
        </div>
      </template>
      <hr/>
      <div>
        <button @click="addRecord">addRecord</button>
        <button @click="register" :disabled="xx.invalid">register</button>
      </div>
      <hr/>
      <div v-html="JSON.stringify(xx).replace(/,/g, ',<br/>')"></div>
    </ValidationObserver>
  </div>
</template>

<script>
import TestRecord from "./TestRecord";

let seq = 0;

export default {
  name: "Sandbox04",
  data: () => ({
    records: []
  }),
  methods: {
    addRecord() {
      seq++;
      const record = new TestRecord();
      record.key = seq;

      this.records.push(record);
    },
    remove(index){
      this.records.splice(index, 1)
    },
    register() {}
  }
};
</script>

<style lang="sass" scoped>
div.row
  display: flex
  .col-1
    width: (1 / 12) * 100%
  .col-4
    width: (4 / 12) * 100%
  .col-11
    width: (11 / 12) * 100%
</style>