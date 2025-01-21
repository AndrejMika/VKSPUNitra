import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router); // Add Vue Router to the app
app.use(createPinia()); // Add Pinia for state management

app.mount('#app'); // Mount the app to the DOM
