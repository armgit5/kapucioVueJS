<template>
  <div class="container">
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

.container.main {
    padding-top: 85px;
}

html, body, .container.main {
    font-family: "Helvetica Neue", "Helvetica", "Hiragino Kaku Gothic Pro", arial, sans-serif;
    color: #211922;
    font-size: 14px;
    font-weight: 300;
}

</style>
