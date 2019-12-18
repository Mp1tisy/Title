<template>
  <div class="login-back">
    <div class="box-card">
      <div class="top">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <el-form ref="form">
        <el-form-item>
          <el-input style="width:351px;margin:0 auto;margin-top:25px;" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:210px;" placeholder="验证码"></el-input>
          <el-button plain style="float:right;height:40px;width:123px">发送验证码</el-button>
        </el-form-item>
        <el-checkbox v-model="checked"></el-checkbox><span class="report">我已阅读并同意<a class="check-choose">用户协议</a>和<a class="check-choose">隐私条款</a></span>
        <el-form-item style="margin-top:20px;">
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style lang="less" scoped>
.login-back {
  background-image: url("../../assets/login_bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-card {
  width: 431px;
  height: 346px;
  box-sizing: border-box;
  padding: 30px 40px 30px 40px;
  background-color: white;
  border-radius: 5px;
  .top {
    text-align: center;
    padding: 0;
    img {
      height: 38px;
    }
  }
}

.check-choose {
  color: #3296fa;
}

.report {
  font-size: 14px;
  color: #999;
  margin-left: 10px;
}

.el-form-item{
  margin-bottom: 20px
}
</style>
