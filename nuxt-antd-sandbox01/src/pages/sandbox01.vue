<template>
  <div>
    <a-alert type="error" message="Error text" banner />

    <a-button type="primary" @click="show">Primary</a-button>

    <a-popconfirm
      title="Are you sure delete this task?"
      @confirm="r"
      @cancel="r"
      okText="Yes"
      cancelText="No"
    >
      <a href="#">Delete</a>
    </a-popconfirm>

    <a-drawer
      title="drawer"
      :visible="drawer"
      :closable="false"
      @close="drawer=false"
      placement="left"
    ></a-drawer>
  </div>
</template>

<script>
export default {
  name: 'sandbox01',
  data: () => ({
    drawer: false,
  }),
  methods: {
    show() {
      this.drawer = true;
    },

    r(ev) {
      console.log(ev);
    },
  },
};
</script>
