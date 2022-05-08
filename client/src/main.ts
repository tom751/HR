import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'
import router from './router'
import PageTitle from '@/components/PageTitle.vue'
import Button from '@/components/Button.vue'
import Input from '@/components/form/Input.vue'
import Spinner from '@/components/Spinner.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.component('PageTitle', PageTitle)
app.component('Button', Button)
app.component('Input', Input)
app.component('Spinner', Spinner)

app.use(createPinia())
app.use(router)

app.mount('#app')
