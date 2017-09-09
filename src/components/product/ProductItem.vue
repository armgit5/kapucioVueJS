<template>
  <div id="product-boarder">

    <div class="img-middle">
      <img alt="Simple Living Seneca Reclaimed Double 'X' Design Cocktail Table" src="https://firebasestorage.googleapis.com/v0/b/oasit-b6bc8.appspot.com/o/armcomm%2Fimages%2F-KpTurFXIHJls92ZEhbR1?alt=media&token=3cc7a348-e393-445a-a170-d279d140d338" class="img-responsive product-img " align="middle" style="border-radius: 8px;padding-top:2px">
    </div>

    <div class="product-info" style="height:200px">
      <div style="height:5px">
        <div class="x-container">
          <i class="fa fa-times-rectangle-o" aria-hidden="true"></i>
        </div>
        <br>
        <div class="pencil-container">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5" style="font-size: 11px;">(hot)</div>
        <div class="col-md-7" style="padding-top:5px;">
          <div class="container">
            <ul class="nav nav-pills">
              <li class="active">
                <a href="#">SM</a>
              </li>
              <li>
                <a href="#">MD</a>
              </li>
              <li>
                <a href="#">LG</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-6 pull-left" style="padding: 0px;font-weight: 200;">
        <div class="product-title pull-left"> Test Name </div>
      </div>
      <div class="col-md-6 pull-right" style="padding: 0px; text-align: right; margin-top: 5px; margin-bottom: 2px">

        <div class="col-md-3" style="padding: 0; padding-top: 2px">
          <a class="btn" style="padding: 0">
            <i class="fa fa-minus-square fa-2x"></i>
          </a>
        </div>
        <div class="col-md-6" style="padding: 0">
          <input type="text" name="quant[1]" class="form-control input-number" min="1" style="text-align: center;">
        </div>
        <div class="col-md-3" style="padding: 0; padding-top: 2px; padding-right: 1px">
          <a class="btn" style="padding: 0">
            <i class="fa fa-plus-square fa-2x"></i>
          </a>
        </div>
      </div>

      <div class="product-comment" style="padding: 0px">
        <textarea class="form-control" style="min-width: 100%" placeholder="please leave a comment here..."></textarea>
      </div>
      <div class="product-price-wrapper">
        <div class="col-md-6" style="padding: 0px;">
          <div class="product-price standard" style="font-weight: 400;"> 15 Bahts</div>
        </div>
        <div class="col-md-6" style="padding: 0px; text-align: right">
          <button type="button" class="btn btn-default">
            <i class="fa fa-shopping-cart" style="font-weight: bold;font-weight: 500;"> Add</i>
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

.product-tile .img-middle {
    cursor: pointer;
    height: 0;
    overflow: hidden;
    padding-bottom: 100%;
    position: absolute;
    z-index: 0;
}

.img-middle .img-responsive {
    margin: 0 auto;
}

.custom {
    border: 1px solid #444;
    border-radius: 6px;
    padding: 2px;
    transition: all 0.2s ease-in-out;
}

.product-info .product-title {
    margin-bottom: 5px;
    margin-top: 10px;
}

.product-info .product-comment {
    margin-bottom: 5px;
}

.product-info {
    color: #444;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.7;
    min-height: 130px;
    max-height: 160px;
    width: 100%;
}

.product-info a {
    color: #444;
    display: block;
    text-decoration: none!important;
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 15px;
}


.product-price {
    color: #000;
    font-size: 15px;
    font-weight: 700;
    max-height: 50px;
    min-height: 25px;

}

.product-price-wrapper {
    width: 100%;
}

#product-boarder {
    border: thin solid #999;
    border-radius: 6px;
    margin-bottom: 15px;
    margin-top: 10px;
    padding-bottom: 5px;
    padding-left: 2px;
    padding-right: 2px;
}

.product-info .x-container {
    /*cursor: pointer;*/
    /*padding-top: 10px;
    padding-right: 20px;*/
    position: absolute;
    right: 20px;
    top: 10px;
    /*z-index: 2;*/
    color: red;
}

.product-info .pencil-container {
    cursor: pointer;
    /*padding-top: 25px;
    padding-right: 20px;*/
    position: absolute;
    right: 20px;
    top: 25px;
    z-index: 2;
    color: orange;
}

:host >>> .alert-md-local {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: green;
    text-align: right;
    padding: 0;
}

.nav li a {
    height:25px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 5px;
    padding-right: 5px;
}

</style>
