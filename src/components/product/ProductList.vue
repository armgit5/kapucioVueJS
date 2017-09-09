<template>
  <div class="container main">

    <p>Welcome: {{email}} to {{companyName}}</p>

    <div class="row">

      <div class="col-md-3 col-lg-3" style="background-color: white; height: 425px;">
        <kapucio-productitem></kapucio-productitem>
      </div>

      <div class="col-md-3 col-lg-3" style="margin-top:10px;">
        <a @click="newCoffee" style="color: #444;font-weight: 300;">
          <i class="fa fa-plus-square-o fa-2x"></i>&nbsp;
          <u>New Coffee</u>
        </a>
      </div>

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

import ProductItem from '@/components/product/ProductItem'

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
    'kapucio-productitem': ProductItem
  }
}
</script>


<style>
.container.main {
  padding-top: 60px;
}

.thumbnail {
  width: 250px;
  height: 300px;
  overflow: auto;
}

img {
  width: 252px;
  height: 158px;
}



.left-nav .refinements-container .refinement-group {
  position: relative;
}

div {
  display: block;
}

body {
  font: 12px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #444;
}

html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#product-boarder {
  border-bottom: thin solid #444;
  margin-bottom: 5px;
  margin-top: 10px;
  padding-bottom: 23px;
}
</style>
