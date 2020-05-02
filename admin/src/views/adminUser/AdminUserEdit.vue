<template>
  <div class="admin-user-edit">
    <h1>{{id ? '编辑管理员' : '新建管理员'}}</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"> </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="model.password"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AdminUserEdit",
  props: {
    id: {},
  },
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async save() {
      let res 
      // 判断是修改还是新建
      if (this.id) {
        res = await this.$request.put(`/rest/admin_users/${this.id}`, this.model)
      } else {
        res = await this.$request.post('/rest/admin_users', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message({
        type: "success",
        message: `${this.id ? '修改' : '新建'}成功啦`
      })
    },
    async fetch() {
      const res = await this.$request.get(`/rest/admin_users/edit/${this.id}`)
      this.model = res.data
      
    }
  },
  created () {
    this.id && this.fetch()
  }
}
</script>

<style>

</style>