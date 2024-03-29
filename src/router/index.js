import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/", // http://localhost:5173
        component: () => import("@/view/index.vue")
    },
    {
        path: "/example", // http://localhost:5173/example
        children: [
            {
                path: '',
                component: () => import("@/view/index.vue"),
            },
            {
                path: 'button',
                component: () => import("@/view/button.vue"),
            },
            {
                path: "date",
                component: () => import("@/view/date.vue"),
            },
            {
                path: "dialog",
                component: () => import("@/view/dialog.vue"),
            },
            {
                path: "form",
                name: "form",
                component: () => import("@/view/form.vue"),
            },
            {
                path: "icon",
                name: "icon",
                component: () => import("@/view/icon.vue"),
            },
            {
                path: "input",
                name: "input",
                component: () => import("@/view/input.vue"),
            },
            {
                path: "menu",
                name: "menu",
                component: () => import("@/view/menu.vue"),
            },
            {
                path: "message",
                name: "message",
                component: () => import("@/view/message.vue"),
            }, {
                path: "page",
                name: "page",
                component: () => import("@/view/page.vue"),
            }, {
                path: "radio",
                name: "radio",
                component: () => import("@/view/radio.vue"),
            }, {
                path: "select",
                name: "select",
                component: () => import("@/view/select.vue"),
            }, {
                path: "table",
                name: "table",
                component: () => import("@/view/table.vue"),
            }, {
                path: "tag",
                name: "tag",
                component: () => import("@/view/tag.vue"),
            }
        ]
    }
]

const router = createRouter({
    //使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
    //history: createWebHashHistory(), 
    history: createWebHistory(),
    routes
})

export default router