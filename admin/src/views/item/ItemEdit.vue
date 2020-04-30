<template>
  <div class="item-edit">
    <h1>{{id ? '编辑物品' : '新建物品'}}</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"> </el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$request.defaults.baseURL + '/uploads'"
          :show-file-list="false"
          :on-success="afterUpload">
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ItemEdit",
  props: {
    id: {},
  },
  data () {
    return {
      model: {
        name: '',
        icon: ''
      }
    }
  },
  methods: {
    afterUpload(res) {
      // this.$set(this.model, 'icon', res.url)
      // 如果原本没有icon这个值，需要新加进去的话，用上面的方法才可以实现响应式
      this.model.icon = res.url
      this.$message({
        type: "success",
        message: '上传成功'
      })
      console.log(res);
    },
    async save() {
      let res 
      // 判断是修改还是新建
      if (this.id) {
        res = await this.$request.put(`/rest/items/${this.id}`, this.model)
      } else {
        res = await this.$request.post('/rest/items', this.model)
      }
      this.$router.push('/items/list')
      this.$message({
        type: "success",
        message: `${this.id ? '修改' : '新建'}成功啦`
      })
    },
    async fetch() {
      const res = await this.$request.get(`/rest/items/edit/${this.id}`)
      this.model = res.data
      
    }
  },
  created () {
    this.id && this.fetch()
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>