<script setup>
import Parent1 from "./components/parent1.vue";
import Parent2 from "./components/parent2.vue";
import { useWebStore } from "./stores/web.js";
import Round from "./components/round.vue";
import Button from "./view/button.vue";
import ICon1 from './view/icon.vue'
import Message1 from './view/message.vue'
import Menu from './view/menu.vue'
import Tag from './view/tag.vue'
import Input from './view/input.vue'
import Radio from './view/radio.vue'
import Select from './view/select.vue'
import Date from './view/date.vue'
import Form from './view/form.vue'
import Dialog from './view/dialog.vue'
import Page from './view/page.vue'
import Table from './view/table.vue'

const webStore = useWebStore();

console.log(webStore.web);
console.log(webStore.users);
</script>
<template>
  <div>
    <!-- <Parent1>
            <a href="http://www.baidu.com">百度访问地址</a>
        </Parent1>
        <Parent2>
            <template #url="data">
                {{ data.title }}
                {{ data.user }}
                <a href="http://www.google.com">谷歌访问地址</a>
            </template>
        </Parent2>
        <h1>webStore</h1>
        {{  webStore.web.url}}
        {{  webStore.users}}
        <button type="button" @click="webStore.userAdd">添加用户</button>
        <hr>
        <Round/> -->
    <!-- <Button/>
    <hr />
    <ICon1/>
    <hr>
    <Message1/>
    <hr>
    <Menu/>
    <hr>
    <Tag/>
    <hr>
    <Input/>
    <hr>
    <Radio/>
    <hr>
    <Select/>
    <hr>
    <Date/>
    <hr>
    <Form/>
    <hr>
    <Dialog/>
    <hr>
    <Page/>
    <hr>
    <Table/> -->
  </div>
</template>

<style scoped>
</style>