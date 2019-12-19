<template>
  <div class="login-back">
    <div class="box-card">
      <div class="top">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <el-form ref="form" :model="formdata" :rules="formrule">
        <el-form-item prop="phonenumber">
          <el-input v-model="formdata.phonenumber" style="width:351px;margin:0 auto;margin-top:25px;" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:10px;" prop="code">
          <el-input v-model="formdata.code" style="width:210px;" placeholder="验证码"></el-input>
          <el-button plain style="float:right;height:40px;width:123px">发送验证码</el-button>
        </el-form-item>
        <el-form-item style="margin-bottom:20px;" prop="checked">
          <el-checkbox v-model="formdata.checked"></el-checkbox>
          <span class="report">
            我已阅读并同意
            <a class="check-choose">用户协议</a>和
            <a class="check-choose">隐私条款</a>
          </span>
        </el-form-item>
        <el-form-item style="margin-top:0;">
          <el-button type="primary" style="width:100%" @click="check">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        phonenumber: '',
        code: '',
        checked: true
      },
      formrule: {
        phonenumber: [{ required: true, message: '请输入手机号' }, { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不对哦' }],
        code: [{ required: true, message: '请输入验证码' }, { pattern: /^\d{6}$/, message: '请输入正确的验证码哦' }],
        checked: [{ validator (rule, value, callback) {
          if (value === true) {
            callback()
          } else {
            callback(new Error('请阅读后再进行登录'))
          }
        } }]
      }
    }
  },
  methods: {
    check () {
      console.log(this.$refs.form)
      this.$refs.form.validate(isOK => {
        if (isOK) {
          this.$axios.post('/authorizations', { mobile: this.formdata.phonenumber, code: this.formdata.code }).then(res => {
            window.localStorage.setItem('userID', res.data.data.token)
            this.$router.push('/home')
          }).catch(res => {
            this.$message({
              message: '您的手机号或者验证码不正确',
              type: 'warning'
            })
          })
        } else {
          this.$message({
            message: '输入不可为空哦',
            type: 'warning'
          })
        }
      })
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

.el-form-item {
  margin-bottom: 20px;
}
</style>
