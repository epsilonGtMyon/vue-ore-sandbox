<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-primary">
      <div class="navbar-brand">
        <a class="navbar-item">observable-study</a>
      </div>
    </nav>
    <div class="is-flex" style="height:100%">
      <div class="app-menu">
        <b-menu>
          <b-menu-list label="Menu">
            <router-link to="/">Home</router-link>
            <router-link to="/sandbox01">Sandbox01</router-link>
            <router-link to="/sandbox02">Sandbox02</router-link>
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
nav.navbar {
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
}
div.app-menu {
  padding: 1rem;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
  flex: 0 1 200px;
}
div.app-content {
  padding: 1rem;
  flex-grow: 1;
  flex-shrink: 0;
  > * {
    height: 100%;
  }
}
</style>