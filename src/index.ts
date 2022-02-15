import 'uno.css';
import 'normalize.css';
import app from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

createApp(app).use(router).use(createPinia()).mount('#app');