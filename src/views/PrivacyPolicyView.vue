<template>
    <div>
      <Header></Header>
      <Articel />
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import Header from "../components/Header.vue";
  import Articel from "../components/Articel.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    name: "PrivacyPolicyView", 
    components: {
      Header,
      Articel,
      Footer,
    },
  };
  </script>
  