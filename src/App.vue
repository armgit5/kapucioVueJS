<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'

export default {
  components: {
    'app-header': Header
  }
}
</script>

<style>

body {
  background-color: #eaebec;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

html, body, .container.main {
    font-family: "Helvetica Neue", "Helvetica", "Hiragino Kaku Gothic Pro", arial, sans-serif;
    color: #211922;
    font-size: 14px;
    font-weight: 300;
}

</style>
