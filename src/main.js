/* eslint-disable no-unused-vars */
/* eslint-disable vue/multi-word-component-names */
import PrimeVueButton from 'primevue/button';
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import 'bootstrap/dist/css/bootstrap.css';
import 'primevue/resources/themes/lara-dark-teal/theme.css';
import './assets/main.css';
import InputText from 'primevue/inputtext';
import Tooltip from 'primevue/tooltip';
import Skeleton from 'primevue/skeleton';
import Card from 'primevue/card';
import Timeline from 'primevue/timeline';


import AOS from 'aos'
import 'aos/dist/aos.css'

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(PrimeVue).use(AOS).use(router).use(bootstrap);
app.component('PrimeVueButton', PrimeVueButton).component('InputText', InputText).component('Skeleton', Skeleton).component('Card', Card), app.component('Timeline', Timeline);

app.directive('tooltip', Tooltip);

app.mount('#app');
