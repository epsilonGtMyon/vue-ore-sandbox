<template>
  <a-layout>
    <a-layout-header class="primary">Header</a-layout-header>
    <a-layout>
      <a-layout-sider theme="light" breakpoint="sm" collapsible>
        <a-menu theme="light" mode="inline">
          <!-- menu-itemを押したときに遷移するようにした方がいい -->
          <template v-for="menuItem in menuItems">
            <a-menu-item :key="menuItem.key">
              <a-icon :type="menuItem.type" />
              <nuxt-link :to="menuItem.to" tag="span">{{menuItem.text}}</nuxt-link>
            </a-menu-item>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <nuxt />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  data: () => ({
    menuItems: [],
  }),
  mounted() {
    this.menuItems = [
      { key: 1, type: 'pie-chart', to: '/sandbox01', text: 'sandbox01' },
      { key: 2, type: 'pie-chart', to: '/sandbox02', text: 'sandbox02' },
      { key: 3, type: 'pie-chart', to: '/sandbox03', text: 'sandbox03' },
      { key: 4, type: 'pie-chart', to: '/sandbox04', text: 'sandbox04' },
    ];
  },
};
</script>

<style lang="sass" scoped>
.ant-layout
  height: 100%
  .ant-layout-header
    color: white
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1)
    z-index: 1

  .ant-layout-footer
    padding: 0 1rem
    z-index: 1
</style>


<style lang="sass">
.ant-layout
  .ant-layout-sider-trigger
    bottom: 20px
</style>
