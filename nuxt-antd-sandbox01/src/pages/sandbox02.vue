<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal title="Basic Modal" v-model="visible" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'sandbox02',
  data: () => ({
    visible: false,
  }),
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');

          this.$message.info('This is a normal message');
        },
      });
    },
  },
};
</script>
