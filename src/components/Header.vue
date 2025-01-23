<template>
  <header>
    <div class="container">
      <div class="headtop">
        <h1 class="navbar-brand navbar-brand_">
          <router-link to="/">
            <img style="width: 100px; height: 100px;" alt="VK SPU Nitra" src="../../assets/img/logo.png" />
          </router-link>
        </h1>
        <router-link class="bmember" to="/">
          <img src="../../assets/img/page1_icon1.png" alt="" />Staň sa členom klubu
        </router-link>
      </div>
    </div>
    <div class="container">
      <div class="menuheader">
        <nav class="navbar navbar-default navbar-static-top tm_navbar" role="navigation">
          <ul class="nav sf-menu">
            <li :class="{ active: isActive('/') }"><router-link to="/">Home</router-link></li>
            <li :class="{ active: isActive('/about') }">
              <router-link to="/about">About</router-link>
              <ul>
                <li><a href="#">Dolore Ipsu</a></li>
                <li><a href="#">Consecte</a></li>
                <li>
                  <a class="last" href="#">Elit Conseq</a>
                  <ul>
                    <li>
                      <img src="../../assets/img/arrowsubmenu1.png" alt="" />
                      <a href="#">Dolore Ipsu</a>
                    </li>
                    <li><a href="#">Consecte</a></li>
                    <li><a class="last" href="#">Elit Conseq</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li :class="{ active: isActive('/gallery') }"><router-link to="/gallery">Gallery</router-link></li>
            <li :class="{ active: isActive('/blog') }"><router-link to="/blog">Blog</router-link></li>
            <li :class="{ active: isActive('/contacts') }"><router-link to="/contacts">Contacts</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header> 
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "HeaderComponent",
  data() {
    return {
      route: useRoute(), // Access the current route
    };
  },
  methods: {
    isActive(path) {
      return this.route.path === path; 
    },
  },
};
</script>