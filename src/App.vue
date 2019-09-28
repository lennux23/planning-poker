<template>
  <div id="app">
    <Menu></Menu>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import Menu from '@/views/Menu'
export default {
  components: {
    Menu
  },
}
</script>

<style lang="scss">
</style>
