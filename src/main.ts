import './assets/main.css';
import './assets/themes/lara-light/mobilityways/theme.scss';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import { router } from './router';

import Toast, { type PluginOptions, POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import Button from 'primevue/button';
import { vueQueryOptions } from './api/vueQueryOptions';

const app = createApp(App);

const toastOptions: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT
};

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, vueQueryOptions);
app.use(PrimeVue);
app.use(Toast, toastOptions);

// TODO: Do this for all components we want globally?
app.component('Button', Button);

app.mount('#app');
