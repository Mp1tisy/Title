<template>
  <div>
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <slot name="nowpage"></slot>
    </el-breadcrumb-item>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
