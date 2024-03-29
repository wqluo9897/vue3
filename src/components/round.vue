<script setup>
import { reactive, ref } from "vue";
const number = ref(1);

const pre = () => {
  number.value--;
  if (number.value <= 1) {
    number.value = 1;
  }
};

const next = () => {
  number.value++;
  if (number.value >= 4) {
    number.value = 4;
  }
};

const jump = (value) => {
  number.value = value;
};

const list = reactive(["测试1", "测试2"]);

const inputValue = ref("");

const addInput = () => {
  list.push(inputValue.value);
};

const del = (i) => {
  list.splice(i, 1);
};

const map = new Map([
  ["name", "luo"],
  ["age", 20],
]);
console.log(map);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`hello, my name is ${this.name}, I am ${this.age} years old`);
  }
}

const p = new Person("luo", 20);
p.sayHello();

const add = (a, b) => a + b;
console.log(add(1, 2));

let arr = [10, 11];
console.log(arr);

arr.unshift(1, 2);
console.log(arr);

arr.sort((a, b) => a - b);
console.log(arr);

arr = arr.filter((item) => item > 10);
console.log(arr);

const set = new Set([1, 2, 3, 5, 2]);
console.log(set);

console.log(set.has(4));
console.log(set.size);

console.log(Array.from(set));

const web = "测试一下";
console.log([...web]);
[...web].forEach((item, index) => console.log(item, index));
</script>
<template>
  <div>
    {{ number }}
    <img :src="`/assets/${number}.jpg`" style="width: 300px" />
    <button @click="pre">上一张</button>
    <button @click="next">下一张</button>

    <ul>
      <li v-for="i in 4" :key="i">
        <a href="#" @click="jump(i)">{{ i }}</a>
      </li>
    </ul>

    <hr />
    <h1>记事本({{ list.length }})</h1>

    <ul>
      <li v-for="(i, index) in list" :key="index">
        {{ i }}
        <button @click="del(index)">删除</button>
      </li>
    </ul>

    <input type="text" name="inputValue" id="inputValue" v-model="inputValue" />
    <br />
    <button @click="addInput">添加</button>
    <hr />
    <h3>按钮</h3>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <hr />
    <h3>按钮属性</h3>
    <el-button plain>朴素按钮</el-button>
    <el-button round>圆角按钮</el-button>
    <el-button circle>圆</el-button>
    <el-button disabled>禁用按钮</el-button>
    <el-button loading>加载中</el-button>

    <hr />
    <h3>尺寸</h3>
    <el-button size="large">大型按钮</el-button>
    <el-button>默认按钮</el-button>
    <el-button size="small">小型按钮</el-button>
  </div>
</template>

<style scoped>
</style>