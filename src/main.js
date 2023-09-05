import { createApp } from 'vue'
import App from './App.vue'
import router from '@/bootstrap/router'
import {initializeAPI, initializeImgurAPI} from '@/bootstrap/axios'
import { createPinia } from 'pinia'

initializeAPI()
initializeImgurAPI()

import '@/index.css'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
