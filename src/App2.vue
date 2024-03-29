<script setup>
import { ref, reactive, watchEffect, computed} from "vue";
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Demo from "./components/demo.vue";
import { provide } from 'vue'

const str = ref("<h3>1111111111</h3>");
const list = reactive([
  { name: "测试1", value: "1" },
  { name: "测试2", value: "2" },
  { name: "测试3", value: "3" },
]);
// provide(provideStr, str);
const showChange = () => {
  show.value = !show.value;
};
const show = ref(true);
const add = () => {
  number.value++;
};
const number = ref(10);
const data = reactive({ 
  title: "标题1",
  content: "内容1",
});

const sub = computed(() => {
  return Number(number.value) + 5;
});

watchEffect(() => {
  if (number.value < 10) {
    console.log(11111111111);
  }
});

const propsWeb = reactive({
  user: 10,
  url: "www.baidu.com",
})

const addUser = () => {
  propsWeb.user++;
  console.log(propsWeb.user);
}

const emitsGetWeb = (data) => {
  console.log('data:' + data.url);
  data.url = 'www.google.com';
  console.log('data:' + data.url);
}

const user = ref(0)

const emitUserAdd = (data) => {
  propsWeb.user += data;
}

provide("provideUser", propsWeb);

const userAdd = () => {
  user.value++;
}
provide('provideFuncUserAdd', userAdd)

</script>
  <template>
  
  <div>
    user: {{ user }}<br>
    propUser: {{ propsWeb.user }}
    <Demo @getWeb = "emitsGetWeb" @userAdd="emitUserAdd"/>
    <Header propsName="名字" propsUrl="地址" propsAdd="goHere"></Header>
    <Footer :="propsWeb"></Footer>
    <hr>
    <button type="button" @click="addUser">user+</button>
    <hr>
    {{ data.title }}<br />
    {{ data.content }}
    {{ number }}
    <input type="text" name="number" id="1" v-model="number" />
    <button v-on:click="add">number++</button>
    <div v-show="show">test</div>
    <button @click="showChange">showChange</button>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <select name="test" id="">
      <option value="1">测试1</option>
      <option value="2">测试2</option>
      <option value="3">测试3</option>
    </select>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
    </ul>
    <div v-html="str"></div>
    {{ sub }}
  </div>
</template>

<style scoped></style>
