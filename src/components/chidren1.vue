<script setup>
import { ref,onMounted,onUpdated,reactive,toRefs,toRef } from 'vue';

onMounted(() => {
    console.log('onMounted');
})

onUpdated(() => {
    console.log('onUpdated');
})

const user = ref(0)

const addUser = () => {
    user.value++;
}

let web = reactive({
  count: 10,
  url: "www.baidu.com",
})
// let {count,url} = toRefs(web);
let url = toRef(web, "url");
let count = web.count
console.log(count,url);

</script>
<template>
    <div>
        <h1>Children</h1>
        <!-- 用户：{{ user }} -->
        <button type="button" @click="addUser">+用户</button>

    </div>
</template>

<style scoped>

</style>