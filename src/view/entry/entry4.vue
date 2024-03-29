<script setup>
</script>
<template>
  <el-container>
    <el-aside style="width: 300px">el-slider</el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>
      <el-main>el-main</el-main>
      <el-footer>el-footer</el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-aside {
  border: 1px solid black;
  height: 1000px;
}

.el-header {
    border: 1px solid black;
    height: 200px
}

.el-main {
    border: 1px solid black;
}

.el-footer {
    border: 1px solid black;
}
</style>