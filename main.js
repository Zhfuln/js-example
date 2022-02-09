import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import store from "./store/index.js"
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
createApp(App).use(router).use(store).use(ElementPlus).use(Vue3VideoPlayer, {
    lang: 'zh-CN'
}).mount('#app')
