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

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, vueQueryOptions);
app.use(PrimeVue);

/**
 * vue-toastification
 * Note Prime Vue has it's own toast lib, but it's no good here as it only works inside script setup
 * We need to fire it from API layer.
 */
const toastOptions: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT
};
app.use(Toast, toastOptions);

/**
 * We could instantiate all PrimeVue components we use this way if we want
 * Whether that's a good thing to do though I'm not sure.
 * Kinda nice to see what's being used per component via imports?
 */
app.component('Button', Button);

app.mount('#app');
