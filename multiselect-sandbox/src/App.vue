<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-dark">
      <div>
        <span
          class="icon is-large"
          style="cursor:pointer"
          @click="visibleSideMenu=!visibleSideMenu"
        >
          <i class="fas fa-lg" :class="visibleSideMenu ? 'fa-times': 'fa-bars'"></i>
        </span>

        <div class="app-menu-wrapper">
          <transition :name="visibleSideMenu ? 'slide-next': 'slide-prev'">
            <div v-show="visibleSideMenu" class="app-menu">
              <b-menu>
                <b-menu-list label="Menu">
                  <router-link to="/">Home</router-link>
                  <router-link to="/sandbox01">Sandbox01</router-link>
                </b-menu-list>
              </b-menu>
            </div>
          </transition>
        </div>
      </div>
      <div class="navbar-brand">
        <a class="navbar-item">multiselect-sandbox</a>
      </div>
    </nav>
    <div class="app-content-wrapper" :class="visibleSideMenu ? 'visible-side-menu': ''">
      <div class="app-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  visibleSideMenu: boolean
  constructor() {
    super()
    this.visibleSideMenu = false
  }
}
</script>

<style lang="scss" scoped>
$sideMenuWidth: 200px;
nav.navbar {
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
}
div.app-menu-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  .app-menu {
    position: absolute;
    top: 3.25rem;
    bottom: 0;
    left: 0;
    min-width: $sideMenuWidth;
    padding: 1rem;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
  }
}
div.app-content-wrapper {
  height: 100%;
  padding-left: 0;
  transition: padding-left 200ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  > .app-content {
    height: 100%;
    width: 100%;
    padding: 1rem;
  }
  &.visible-side-menu {
    padding-left: $sideMenuWidth;
  }
}
</style>