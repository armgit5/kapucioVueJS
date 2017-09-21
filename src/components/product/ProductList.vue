<template>
  <div class="container">
    <p>Welcome: {{email}} to {{companyName}}</p>
    <div class="row">
      <div v-for="product in products">
        <product :product="product"></product>
      </div>
    </div>
    <hr>
    <footer>
      <div>© Kapucio Company 2017</div>
    </footer>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import { products } from './products.js'

export default {
  data() {
    return {
      email: 'fmdas@codfas.com',
      companyName: 'testcom',
      products: products
    }
  },
  methods: {
    fetchData() {
      this.$http.get('coffees.json')
        .then(
        response => {
          return response.json()
        }
        )
        .then(data => {
          this.products = data
          console.log(this.products)
        })
    }
  },
  components: {
    'product': ProductItem
  },
  created() {
    this.fetchData()
  }
}
</script>


<style>
.left-nav .refinements-container .refinement-group {
  position: relative;
}
</style>
