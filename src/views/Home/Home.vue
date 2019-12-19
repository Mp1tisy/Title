<template>
  <div>
    <el-container>
      <el-aside width="200px" style="overflow:hidden;">
        <homenav></homenav>
      </el-aside>
      <el-container>
        <el-header height="55px" style="padding:0 10px;">
          <hometop></hometop>
        </el-header>
        <el-main style="background-color:#f2f3f5;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import hometop from '../../components/home/hometop.vue'
import homenav from '../../components/home/homenav'
export default {
  components: {
    'hometop': hometop,
    'homenav': homenav
  }
}
</script>

<style>
</style>
