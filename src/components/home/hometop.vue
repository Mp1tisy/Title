<template>
  <div class="top">
    <el-row>
      <el-col :span="0.5">
        <div class="grid-content bg-purple">
          <div class="el-icon-s-fold"></div>
        </div>
      </el-col>
      <el-col :span="10" style="margin-left:10px;">
        <div style="line-height:50px;color:#2c3e50;">江苏传智播客教育科技股份有限公司</div>
      </el-col>
      <el-col :span="13">
        <el-dropdown trigger="click" style="float:right;cursor:pointer;" @command="handleCommand">
          <div>
            <i class="el-icon-caret-bottom" style="font-size:12px; float:right;line-height:52px;"></i>
            <span style="font-size:14px; float:right;line-height:52px;margin-right:10px;" :v-model="userdata.name">{{userdata.name}}</span>
            <img
              :src="userdata.photo"
              alt
              style="height:35px;width:35px;border-radius:50%;margin-top:7.5px;float:right;margin-right:10px"
              :v-model="userdata.photo"
            />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">个人信息</el-dropdown-item>
            <el-dropdown-item command="b">Git地址</el-dropdown-item>
            <el-dropdown-item command="c" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div
          class="grid-content bg-purple-light"
          style="line-height:50px;float:right;margin-right:10px;"
        >消息</div>
        <div
          class="grid-content bg-purple-light"
          style="line-height:50px;padding-right:20px;float:right;"
        >
          <el-input placeholder="请输入搜索的文章内容" size="small">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userdata: {}
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'b') {
        window.location.href = 'https://github.com/shuiruohanyu/89heimatoutiao'
      } else if (command === 'c') {
        window.localStorage.removeItem('userID')
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.$axios({
      url: '/user/profile'
    }).then(res => {
      this.userdata = res.data
    })
  }
}
</script>

<style lang='less' scoped>
.top {
  height: 55px;
  .bg-purple {
    .el-icon-s-fold {
      font-size: 20px;
      line-height: 50px;
    }
  }
}
</style>
