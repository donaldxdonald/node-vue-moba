<template>
  <div class="category-edit">
    <h1>{{id ? '编辑分类' : '新建分类'}}</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
         <el-select v-model="model.parent" placeholder="请选择">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CategoryEdit",
  props: {
    id: {},
  },
  data () {
    return {
      model: {
        parent: ''
      },
      parents: []
    }
  },
  methods: {
    async save() {
      let res 
      // 判断是修改还是新建
      if (this.id) {
        res = await this.$request.put(`/rest/categories/${this.id}`, this.model)
      } else {
        res = await this.$request.post('/rest/categories', this.model)
      }
      this.$router.push('/categories/list')
      this.$message({
        type: "success",
        message: `${this.id ? '修改' : '新建'}成功啦`
      })
    },
    async fetch() {
      const res = await this.$request.get(`/rest/categories/edit/${this.id}`)
      this.model = res.data
      
    },
    async fetchParents() {
      const res = await this.$request.get(`/rest/categories`)
      this.parents = res.data
      
    }
  },
  created () {
    this.fetchParents()
    this.id && this.fetch()
  }
}
</script>

<style>

</style>