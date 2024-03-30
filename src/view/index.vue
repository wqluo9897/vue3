<script setup>
const routeLink = [
  { name: "按钮", path: "/example/button" },
  { name: "选择器", path: "/example/select" },
  { name: "单选&多选", path: "/example/radio" },
  { name: "选择", path: "/example/select" },
  { name: "输入框", path: "/example/input" },
  { name: "日期", path: "/example/date" },
  { name: "标签", path: "/example/tag" },
  { name: "表单", path: "/example/form" },
  { name: "表格", path: "/example/table" },
  { name: "弹出框", path: "/example/dialog" },
  { name: "导航菜单", path: "/example/menu" },
  { name: "通知", path: "/example/message" },
  { name: "分页", path: "/example/page" },
  { name: '上传', path: '/example/upload' },
  { name: '图片预览', path: '/example/image' },
  { name: '树形控件', path: '/example/tree' },
  { name: '拖拽', path: '/example/drag' },
  { name: '日历', path: '/example/calendar' },
  { name: '时间轴', path: '/example/timeline' },
  { name: '进度条', path: '/example/progress' },
  { name: '评分', path: '/example/rate' },
  { name: '轮播', path: '/example/carousel' },
  { name: '折叠面板', path: '/example/collapse' },
  { name: '走马灯', path: '/example/marquee' },
  { name: '步骤条', path: '/example/steps' },
  { name: '下拉菜单', path: '/example/dropdown' },
  { name: '侧边栏', path: '/example/aside' },
  { name: '面包屑', path: '/example/breadcrumb' },
  { name: '回到顶部', path: '/example/backtop' },
];
</script>
<template>
  <div >
    <h1>首页-基础组件学习,999</h1>
    <div class="flex">
      <!-- <router-link :to="item.path">{{ item.name }}</router-link>
      <hr /> -->

      <!-- <el-card class="flex">
        <template #header>{{ item.name }}</template>
      </el-card> -->

      <div class="item" v-for="(item,index) in routeLink">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* 水平居中 */
  align-items: f; /* 垂直居中 */
}

.item {
      width: 300px; /* 子元素的宽度 */
      height: 100px; /* 子元素的高度 */
      background-color:cornflowerblue;
      border: 1px solid black;
      text-align: center;
      margin: 0px 20px 20px 0px
    }
</style>