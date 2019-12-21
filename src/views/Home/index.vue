<template>
  <div>
    <el-row style="margin-bottom:10px;">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark" style="height:66px;"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="15" style="padding-right:0;">
        <div class="grid-content bg-purple">
          <el-container>
            <el-header style="height:273px;">Header</el-header>
            <el-main style="margin-top:10px;height:284px;">Main</el-main>
          </el-container>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple">
          <el-container>
            <el-header style="height:346px;">Header</el-header>
            <el-main style="margin-top:10px;height:346px;">Main</el-main>
          </el-container>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #ffffff;
  border: 1px solid #e7e7e9;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  border: 1px solid #e7e7e9;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
  border: 1px solid #e7e7e9;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
