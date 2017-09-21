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
            <router-link
                to="/"
                tag="li"
                active-class="active"
                exact>
              <a class="navbar-brand navbar-brand-logo" style="margin:0px" href="/">
                <div class="brand">
                  <span style="font-size:30px;cursor:pointer;color:white;margin-left:25px;" @click="openNav()">&#9776;</span>
                </div>
                <div class="brand"> KAPUCIO
                  <p style="font-size: 12px">OASIT</p>
                </div>
              </a>
            </router-link>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul class="nav navbar-nav">

            </ul>
            <ul class="nav navbar-nav navbar-right">
              <router-link
                to="/queue"
                tag="li"
                active-class="active"
                exact>
                <a style="height:45px">
                  <i class="pe-7s-note2"></i>
                </a>
              </router-link>
              <router-link
                to="/cart"
                tag="li"
                active-class="active"
                exact>
                  <a>
                  <i class="pe-7s-cart">
                    <span class="label" style="font-size: 11px;">{{productCounts}}</span>
                  </i>
                </a>
              </router-link>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="pe-7s-user"></i>
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
          </div>
        </div>
      </nav>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      coffeeCounts: 0,
      customerName: '',
      clicked: false,
      loginStatus: false
    }
  },
  methods: {
    openNav() {
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
    menuOut() {
      document.getElementById('mySidenav').style.width = '0'
      document.getElementById('mySidenav').style.paddingLeft = '0%'
      document.getElementById('mySidenav').style.paddingRight = '0%'
      this.clicked = false
    }
  },
  computed: {
    ...mapGetters([
      'productCounts'
    ])
  }
}
</script>


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

.navbar-nav > li > a {
  height: 45px;
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

