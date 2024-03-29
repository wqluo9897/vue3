<script setup>
</script>
<template>
  <div>
    <h3>图标</h3>
    <el-icon><IEpPlus /></el-icon>
    <el-icon><IEpEdit /></el-icon>
    <el-icon><IEpDelete /></el-icon>
    <el-icon class="is-loading"><Loading /></el-icon>

    <hr />
    <h3>属性</h3>
    <el-icon size="30" color="red"><IEpSearch /></el-icon>

    <hr />
    <h3>按钮</h3>
    <el-button type="primary">
      <el-icon><IEpSearch /></el-icon>
      <span> 搜索 </span>
    </el-button>

    <el-button type="primary">
      <el-icon><IEpSearch /></el-icon>
    </el-button>

    <el-button type="primary" circle>
      <el-icon><IEpSearch /></el-icon>
    </el-button>

    <hr />
    <h3>按钮组</h3>
    <el-button-group>
      <el-button type="primary">
        <el-icon><IEpPlus /></el-icon>
      </el-button>

      <el-button type="primary">
        <el-icon><IEpEdit /></el-icon>
      </el-button>

      <el-button type="primary">
        <el-icon><IEpDelete /></el-icon>
      </el-button>
    </el-button-group>
  </div>
</template>

<style scoped>
</style>