<template>
  <header id="header">
    <div class="container">
      <div class="headtop">
        <h1 class="navbar-brand navbar-brand_">
          <router-link to="/">
            <img alt="VK SPU Nitra" src="../../assets/img/logo.png" />
          </router-link>
        </h1>
        <router-link class="bmember" to="/membership">
          <img src="../../assets/img/page1_icon1.png" alt="" />Staň sa členom klubu
        </router-link>
      </div>
    </div>
    <div class="container">
      <div class="menuheader">
        <nav class="navbar navbar-default navbar-static-top tm_navbar" role="navigation">
          <ul class="nav sf-menu">
            <li class="active"><router-link to="/">Home</router-link></li>
            <li>
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
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contacts">Contacts</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>