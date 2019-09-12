<template>
  <a-layout>
    <a-layout-header class="primary">Header</a-layout-header>
    <a-layout>
      <a-layout-sider theme="light" breakpoint="sm" collapsible>
        <a-menu theme="light" mode="inline">
          <!-- menu-itemを押したときに遷移するようにした方がいい -->
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <nuxt-link to="/sandbox01" tag="span">sandbox01</nuxt-link>
          </a-menu-item>

          <a-menu-item key="2">
            <a-icon type="pie-chart" />
            <nuxt-link to="/sandbox02" tag="span">sandbox02</nuxt-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <nuxt />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>


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
