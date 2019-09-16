<template>
  <div>
    <a-input placeholder="xxx-input" />a-input-group
    <a-input-group>
      <a-col :span="2">
        <a-input placeholder="4" />
      </a-col>
      <a-col :span="2">
        <a-input placeholder="3" />
      </a-col>
      <a-col :span="2">
        <a-input-number :min="1" :max="10" placeholder="2" />
      </a-col>
      <a-col :span="4">
        <a-checkbox>Checkbox(ずれるね</a-checkbox>
      </a-col>
      <a-col :span="2">
        <a-switch v-model="checked" checkedChildren="on" unCheckedChildren="off" />xx
      </a-col>
      <a-col :span="2">
        <a-date-picker />
      </a-col>
    </a-input-group>a-row,a-col
    <a-row type="flex" justify="start" align="middle">
      <a-col :span="2">
        <a-input placeholder="4" />
      </a-col>
      <a-col :span="2">
        <a-input placeholder="3" />
      </a-col>
      <a-col :span="2">
        <a-input-number :min="1" :max="10" placeholder="2" />
      </a-col>
      <a-col :span="4">
        <a-checkbox>Checkbox</a-checkbox>
      </a-col>
      <a-col :span="2">
        <a-switch v-model="checked" checkedChildren="on" unCheckedChildren="off" />yy
      </a-col>
      <a-col :span="2">
        <a-date-picker />
      </a-col>
    </a-row>

    <a-row type="flex" justify="start" align="middle">
      <a-col :span="4">
        <label>xx</label>
        <a-input placeholder="4" />
      </a-col>
    </a-row>

  </div>
</template>

<script>
export default {
  data: () => ({
    checked: false,
  }),
};
</script>
