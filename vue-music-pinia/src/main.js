import {createApp} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import './assets/styles/base-compiled.css'
import './assets/styles/main.css'
import router from "@/router";
import VeeValidatePlugin from './includes/validation'
import {auth} from './includes/firebase'

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        app.use(createPinia());
        app.use(router)
        app.use(VeeValidatePlugin)
        app.mount('#app')
    }
})


