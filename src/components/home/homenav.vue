<template>
  <div class="left">
    <div class="logo">
      <img src="../../assets/logo_admin.png" alt />
    </div>
    <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b" style="width:201px;" router>
      <el-menu-item index="/home">
        <span slot="title" style="margin-left:20px">首页</span>
      </el-menu-item>
      <el-submenu index="content">
        <template slot="title">
          <span slot="title" style="margin-left:20px">内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/publish">发布文章</el-menu-item>
          <el-menu-item index="/home/articles">内容列表</el-menu-item>
          <el-menu-item index="/home/comment">评论列表</el-menu-item>
          <el-menu-item index="/home/material">素材管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="fans">
        <template slot="title">
          <span slot="title" style="margin-left:20px">粉丝管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/fans">图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/home/account">
        <span slot="title" style="margin-left:20px">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.left {
  height: 100vh;
  background-color: #323745;
  .navchoose {
    width: 201px;
  }
  .logo {
      height: 60px;
      background-color: #2e2f32;
      display: flex;
      justify-content: center;
      align-items: center;
    img {
      width: 120px;
    }
  }
}
</style>
