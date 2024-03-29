import {reactive, ref} from 'vue'
import { defineStore } from "pinia";

export const useWebStore =  defineStore('web', () => {
    const web = reactive({
        title: '网站地址',
        url: 'www.baidu.com'
    })

    const users = ref(1000)

    const userAdd = () => {
        users.value++
    }

    return {
        web,
        users,
        userAdd
    }

})