<template>
  <div id="app">
    <kapucio-header></kapucio-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue'

  export default {
    components: {
      'kapucio-header': Header
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
