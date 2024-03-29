import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import router from './router'
//整体导入 ElementPlus 组件库
/*
import ElementPlus from 'element-plus' //导入 ElementPlus 组件库的所有模块和功能 
import 'element-plus/dist/index.css' //导入 ElementPlus 组件库所需的全局 CSS 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //导入 ElementPlus 组件库中的所有图标
*/
const pinia = createPinia()
pinia.use(createPersistedState())

const app = createApp(App);
app.use(router)
//注册 ElementPlus 组件库中的所有图标到全局 Vue 应用中
/*
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus) //将 ElementPlus 插件注册到 Vue 应用中
*/
app.use(pinia)

app.mount('#app')
