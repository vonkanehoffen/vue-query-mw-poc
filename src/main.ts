import './assets/main.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import { router } from './router';

import ToastService from 'primevue/toastservice';

import Button from 'primevue/button';
import { vueQueryOptions } from './api/vueQueryOptions';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, vueQueryOptions);
app.use(PrimeVue);
app.use(ToastService);

// TODO: Do this for all components we want globally?
app.component('Button', Button);

app.mount('#app');
