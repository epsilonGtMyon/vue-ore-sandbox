<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-primary"></nav>
    <div class="is-flex" style="height:100%">
      <div class="app-menu">
        <b-menu>
          <b-menu-list label="Menu">
            <router-link to="/">Home</router-link>
            <router-link to="/sandbox01">Sandbox01</router-link>
          </b-menu-list>
        </b-menu>
      </div>
      <div class="app-content">
        <router-view />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
div.app-menu {
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
}
div.app-content {
  padding: 1rem;
  flex-grow: 1;
  > * {
    height: 100%;
  }
}
</style>