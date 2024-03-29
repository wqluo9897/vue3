<script setup>
const headerText = ref('头部文本');
const asideText = ref('侧边栏文本');
const mainText = ref('主内容文本');
const footerText = ref('底部文本');
</script>
<template>
    <el-container>
      <el-header>头部区域</el-header>
      <el-aside width="200px">侧边栏区域</el-aside>
      <el-main>主内容区域</el-main>
      <el-footer>底部区域</el-footer>
    </el-container>
  </template>

<style scoped>
/* 你可以在这里添加一些自定义样式 */
.el-header, .el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 20px;
}
</style>