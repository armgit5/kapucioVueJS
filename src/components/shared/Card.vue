<template>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="card">
      <div class="image">
        <img src="http://md-pro-angular.creative-tim.com/assets/img/card-2.jpeg" alt="">
      </div>
      <div class="content">
        <span class="title">Americano</span>
        <span class="price">$39</span>
        <div class="description">Americano coffee</div>
        <span class="attrs pull-right">
          <strong>Size</strong>
          <span>S, M, L</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.card {
  display: inline-block;
  position: relative;
  width: 100%;
  margin: 25px 0;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .14);
  border-radius: 2px;
  background: #fff;
}

.card .image {
  min-height: 160px;
  background-size: cover;
  background-image: url(http://md-pro-angular.creative-tim.com/image_placeholder.ebe9884b2152a08a525f.jpg);
  background-position: 50%;
}

.card .image img {
  width: 100%;
  height: 100%;
}

.card .content {
  position: relative;
  padding: 15px 20px;
}

.card .title {
  font-size: 22px;
  color: #393c45;
  text-decoration: none;
}

.card .description {
  color: #999;
}

.card .footer {
  margin: 0 20px;
  padding: 10px 0;
}

.card .footer div {
  display: inline-block;
}

.card .price {
  float: right;
  color: #48cfad;
  font-size: 22px;
  font-weight: 600;
}

.card .attrs strong {
  font-weight: 700;
  color: #393c45;
  font-size: 14px;
}

.card .attrs span {
  color: #969699;
  font-size: 18px;
  display: inline-block;
  margin-bottom: 8px;
}
</style>
