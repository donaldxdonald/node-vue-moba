<template>
  <div class="article-edit">
    <h1>{{id ? '编辑文章' : '新建文章'}}</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
         <el-select v-model="model.categories" placeholder="请选择">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"> </el-input>
      </el-form-item>
      <el-form-item label="内容">
        <vue-editor v-model="model.content"
        useCustomImageHandler 
        @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: "ArticleEdit",
  props: {
    id: {},
  },
  components: {
    VueEditor
  },
  data () {
    return {
      model: {
        categories: []
      },
      categories: []
    }
  },
  methods: {
    async save() {
      let res 
      // 判断是修改还是新建
      if (this.id) {
        res = await this.$request.put(`/rest/articles/${this.id}`, this.model)
      } else {
        res = await this.$request.post('/rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: "success",
        message: `${this.id ? '修改' : '新建'}成功啦`
      })
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("file", file);

      let res = await this.$request.post('/uploads', formData)
      let url = res.data.url
      Editor.insertEmbed(cursorLocation, "image", url);
      resetUploader();
      
    },
    /**
     * 请求数据
     */
    async fetch() {
      const res = await this.$request.get(`/rest/articles/edit/${this.id}`)
      this.model = res.data
      
    },
    async fetchCategories() {
      const res = await this.$request.get(`/rest/categories`)
      this.categories = res.data
      
    }
  },
  created () {
    this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>

<style>

</style>