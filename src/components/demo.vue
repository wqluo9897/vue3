<script setup>
import { ref,reactive,inject } from 'vue';
    const test = inject("provideUser");
    const web = ({
            title: 'test333',
            url: 'www.baidu.com333'
        })
    const emits = defineEmits(["getWeb","userAdd"]);
    emits("getWeb", web);

    const userAdd = () => {
        emits("userAdd", 10)
    }

    const funcUserAdd =  inject("provideFuncUserAdd");
    console.log(funcUserAdd);
</script>
<template>
  <div>
    <button type="button" @click="funcUserAdd">用户增加</button>
    <button @click="userAdd">add</button>
    <br>
    <h1>test</h1>
  {{ web.title }}
  <br>
  {{ web.url }}
  <hr>
  injectUser: {{ test.user }}
  </div>
</template>

<style scoped>

</style>