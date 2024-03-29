<script setup>
const headerText = ref('欢迎来到全屏布局页面');
const asideText = ref('这里是侧边栏内容');
const mainText = ref('这里是主内容区域');
const footerText = ref('版权所有 © 2023');
</script>
<template>
  <el-container class="full-screen-container" style="height: 100vh;">
    <el-header class="header">头部区域</el-header>
    <el-aside class="aside" width="300px">侧边栏区域</el-aside>
    <el-main class="main">主内容区域</el-main>
    <el-footer class="footer">底部区域</el-footer>
  </el-container>
  </template>


<style scoped>
.full-screen-container {
  display: flex;
  flex-direction: column;
}

.header, .footer {
  flex: 0 0 auto;
  background: linear-gradient(to right, #6dd5ed, #2193b0);
  color: white;
  padding: 1rem;
  text-align: center;
}

.aside {
  background: #f0f2f5;
  flex: 0 0 300px;
  padding: 1rem;
  overflow-y: auto;
}

.main {
  flex: 1;
  background: white;
  padding: 1rem;
  overflow-y: auto;
}

/* 添加一些响应式样式 */
@media (max-width: 768px) {
  .aside {
    width: 100%;
  }

  .full-screen-container {
    flex-direction: column-reverse;
  }
}
</style>