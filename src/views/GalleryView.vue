
Here’s how to rewrite the given component using the Options API:
Refactored Component Using the Options API

<template>
  <div>
    <Header></Header>
    <Gallery />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Gallery from "../components/Gallery.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "GalleryView",
  components: {
    Header,
    Gallery,
    Footer,
  },
};
</script>
