import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router/router.js';
import store from '@/stores/index.js';
import './registerServiceWorker';

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(store).use(pinia).mount('#app');
