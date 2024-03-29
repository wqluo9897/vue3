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
  height: 100vh;
  position: relative; /* 设置相对定位，为侧边栏的绝对定位提供参考 */
}

.el-header {
  /* 头部样式 */
  height: 60px; /* 假设头部高度为60px */
  background: linear-gradient(to right, #6dd5ed, #2193b0);
  color: white;
  padding: 1rem;
  text-align: center;
  position: relative; /* 相对定位，确保内容不会被覆盖 */
  margin-bottom: 1rem; /* 可选：为头部和内容之间添加一些空间 */
}

.el-footer {
  /* 底部样式 */
  height: 40px; /* 假设底部高度为40px */
  background: #b3c0d1;
  color: #333;
  padding: 1rem;
  text-align: center;
  position: relative; /* 相对定位，确保内容不会被覆盖 */
}

.aside {
  background: #f0f2f5;
  flex: 1; /* 让侧边栏占据剩余空间 */
  overflow-y: auto; /* 允许侧边栏内容滚动 */
  position: absolute; /* 绝对定位 */
  top: 60px; /* 顶部位置为头部高度 */
  bottom: 40px; /* 底部位置为底部高度 */
  left: 0; /* 左侧对齐 */
  width: 300px; /* 侧边栏宽度 */
}
</style>