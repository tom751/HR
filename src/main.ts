import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import PageTitle from './components/PageTitle.vue';
import Button from './components/Button.vue';
import store, { key } from './store';

const app = createApp(App);

app.component('PageTitle', PageTitle);
app.component('Button', Button);

app.use(store, key);
app.use(router);

app.mount('#app');
