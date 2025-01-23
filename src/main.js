import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Import Vuetify CSS
import "@mdi/font/css/materialdesignicons.css"; 
import "vue3-carousel/dist/carousel.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"



const app = createApp(App);

app.use(router); // Add Vue Router to the app
app.use(createPinia()); // Add Pinia for state management
app.use(createVuetify());


app.mount('#app'); // Mount the app to the DOM
