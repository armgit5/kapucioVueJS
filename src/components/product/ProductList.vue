<template>
  <div class="container">
    <p>Welcome: {{email}} to {{companyName}}</p>
    <div class="row">
      <card v-for="i in 10" :key="i"></card>
    </div>
    <!--/row-->
    <hr>
    <footer>
      <div>© Kapucio Company 2017</div>
    </footer>
  </div>
  <!--/.container-->
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
  data() {
    return {
      email: 'fmdas@codfas.com',
      companyName: 'testcom'
    }
  },
  methods: {
    newCoffee() {

    }
  },
  components: {
    'product': ProductItem
  }
}
</script>


<style>
.left-nav .refinements-container .refinement-group {
  position: relative;
}
</style>
