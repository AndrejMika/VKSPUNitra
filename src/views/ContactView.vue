<template>
  <div>
    <Header></Header>
    <Contact />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Contact from "../components/ContactForm.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "ContactView",
  components: {
    Header,
    Contact,
    Footer,
  },
};
</script>
  
