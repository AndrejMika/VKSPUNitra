<template>
  <div>
    <Header></Header>
    <Carosel />
    <Home />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Home from "../components/Home.vue";
import Footer from "../components/Footer.vue";
import Carosel from "../components/Carosel.vue";

export default {
  name: "HomeView", 
  components: {
    Header,
    Carosel,
    Home,
    Footer,
  },
};
</script>



  