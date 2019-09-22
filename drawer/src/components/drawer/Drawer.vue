<template>
  <div v-if="value" class="drawer-wrapper">
    <div class="drawer-overlay" @click="clickedOutSide"></div>
    <transition>
      <div v-if="visibleContent" class="drawer-content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Drawer extends Vue {
  @Prop({ default: false })
  value!: boolean;

  visibleContent: boolean;

  constructor() {
    super();
    this.visibleContent = false;
  }

  @Watch("value")
  handleValueChanged(newValue: boolean) {
    this.$nextTick().then(() => {
      this.visibleContent = newValue;
    });
  }

  clickedOutSide() {
    this.visibleContent = false;
    setTimeout(() => {
      this.$emit("input", false);
    }, 100);
  }
}
</script>

<style lang="sass" scoped>

.drawer-wrapper
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  .drawer-overlay
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(0, 0, 0, 0.2)
  .drawer-content
    position: absolute
    top: 0
    bottom: 0
    padding: 2px
    box-shadow: 1px 0 2px 2px rgba(0, 0, 0, 0.3)
    
    background-color: white
    min-width: 30vw
    max-width: 100vw

//雑だけどアニメーションつけてみる
.v-enter-active, .v-leave-active 
    transition: transform 0.2s

.v-enter,
.v-leave-to
    transform: translateX(-100vw)
    

</style>