<template>
  <div class="login-back">
    <div class="box-card">
      <div class="top">
        <img src="../../assets/logo_index.png" alt />
      </div>
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
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
  padding: 30px 0 30px 0;
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
</style>
