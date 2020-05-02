<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit"  type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      model: {}
    }
  },
  created () {
    if (localStorage.token) {
      this.$message({
        message: '你已登录'
      })
      this.$router.push('/')
    }
    this.$message({
        message: '请先登录'
      })
    
  },
  methods: {
    async login() {
      let res = await this.$request.post('/login', this.model)
      localStorage.token = res.data.token
      localStorage.user = this.model.username
      this.$message({
        type: 'success',
        message: '登陆成功'
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .login-container {
    width: 28rem;
    margin: 10rem auto;
  }
</style>