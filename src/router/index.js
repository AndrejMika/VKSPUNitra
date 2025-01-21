import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GalleryView from "../views/GalleryView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/blog", component: BlogView },
  { path: "/gallery", component: GalleryView },
  { path: "/contacts", component: ContactView },
  { path: "/about", component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

