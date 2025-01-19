import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import Home from './views/Home.vue'
import Settings from './views/Settings.vue'
import NotFound from './views/NotFound.vue'
import 'normalize.css'
const pinia = createPinia()
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/settings', component: Settings },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ],
})
createApp(App).use(pinia).use(router).mount('#app') // store/cardStore.js
