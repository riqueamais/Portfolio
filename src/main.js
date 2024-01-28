import PrimeVueButton from 'primevue/button';
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import 'bootstrap/dist/css/bootstrap.css';
import 'primevue/resources/themes/lara-dark-teal/theme.css';
import './assets/main.css';
import InputText from 'primevue/inputtext';
import Tooltip from 'primevue/tooltip';
import AOS from 'aos'
import 'aos/dist/aos.css'

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(PrimeVue);
app.component('PrimeVueButton', PrimeVueButton);
app.component('InputText', InputText);

app.use(AOS)

app.use(router);
app.use(bootstrap);

app.directive('tooltip', Tooltip);

app.mount('#app');
