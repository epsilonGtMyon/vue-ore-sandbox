<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-primary"></nav>
    <div class="is-flex" style="height:100%">
      <div class="menu">
        <b-menu>
          <b-menu-list label="Menu">
            <router-link to="/">Home</router-link>
            <router-link to="/sandbox01">Sandbox01</router-link>
          </b-menu-list>
        </b-menu>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
div.content {
  flex-grow: 1;
  > * {
    height: 100%;
  }
}
</style>