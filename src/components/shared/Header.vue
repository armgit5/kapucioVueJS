<template>
  <div id="navbar-full">
    <div id="navbar">

      <nav class="navbar navbar-ct-azzure navbar-fixed-top" role="navigation" style="background-color: black;">

        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand navbar-brand-logo" style="margin:0px" href="/">
              <!--<div class="logo">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/oasit-b6bc8.appspot.com/o/bee1_85V_icon.ico?alt=media&token=b806fa13-ff6e-4277-9a05-9902a6fb67f6">
                                            </div>-->
              <div class="brand">
                <span style="font-size:30px;cursor:pointer;color:white;margin-left:25px;" @click="openNav()">&#9776;</span>
              </div>
              <div class="brand"> KAPUCIO
                <p style="font-size: 12px">OASIT</p>
              </div>
            </a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul class="nav navbar-nav">

            </ul>
            <ul class="nav navbar-nav navbar-right">
              <!--<li>
                                                <a href="javascript:void(0);" data-toggle="search" class="hidden-xs">
                                                    <i class="pe-7s-search"></i>
                                                    <p>Search</p>
                                                </a>
                                            </li>-->

              <li>
                <a href="#">
                  <i class="pe-7s-note2"></i>
                  <!--<p>Queue</p>-->
                </a>
              </li>
              <li>
                <a href="#/cart">
                  <i class="pe-7s-cart">
                    <span class="label" style="font-size: 11px;">{{coffeeCounts}}</span>
                  </i>
                  <!--<p>Cart</p>-->
                </a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="pe-7s-user"></i>
                  <!--<p>Account <b class="caret"></b></p>-->
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#/admin">Admin</a>
                  </li>
                  <li>
                    <a @click="login()" v-if="!loginStatus">Login/ Signup</a>
                  </li>
                  <li>
                    <a @click="accountLogin()" v-if="loginStatus">{{customerName}}</a>
                  </li>
                  <li>
                    <a @click="logout()">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
            <!--<form class="navbar-form navbar-right navbar-search-form" role="search">
                                         <div class="form-group">
                                              <input type="text" value="" class="form-control" placeholder="Search...">
                                         </div>
                                      </form>-->

          </div>
        </div>
      </nav>
      <!--<div class="blurred-container">
                                    <div class="img-src" style="background-image: url('images/bg.jpg')"></div>
                                </div>-->
    </div>

  </div>
</template>

<style>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.2s;
  padding-top: 60px;
  text-align: center;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: black;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}
</style>

<script>
export default {
  data () {
    return {
      coffeeCounts: 0,
      customerName: '',
      clicked: false,
      loginStatus: false
    }
  },
  methods: {
    openNav () {
      if (!this.clicked) {
        document.getElementById('mySidenav').style.width = '17%'
        document.getElementById('mySidenav').style.paddingLeft = '4%'
        document.getElementById('mySidenav').style.paddingRight = '4%'
        this.clicked = true
      } else {
        document.getElementById('mySidenav').style.width = '0'
        document.getElementById('mySidenav').style.paddingLeft = '0%'
        document.getElementById('mySidenav').style.paddingRight = '0%'
        this.clicked = false
      }
    },
    menuOut () {
      document.getElementById('mySidenav').style.width = '0'
      document.getElementById('mySidenav').style.paddingLeft = '0%'
      document.getElementById('mySidenav').style.paddingRight = '0%'
      this.clicked = false
    }
  }
}
</script>
