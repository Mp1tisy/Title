<template>
  <div>
    <el-container>
      <el-aside width="200px" style="overflow:hidden;background-color: rgb(53, 59, 78);">
        <homenav></homenav>
      </el-aside>
      <el-container>
        <el-header height="55px" style="padding:0 10px;">
          <hometop></hometop>
        </el-header>
        <el-main style="background-color:#f2f3f5;padding:10px;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
