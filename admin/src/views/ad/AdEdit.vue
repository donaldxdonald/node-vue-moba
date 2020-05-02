<template>
  <div class="ad-edit">
    <h1>{{id ? '编辑广告' : '新建广告'}}</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button type="text" @click="model.items.push({})">
          <i class="el-icon-plus"></i> 添加广告
        </el-button>
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="24" v-for="(item, index) in model.items" :key="index">
            <el-form-item label="跳转链接(url)">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" class="ad-image">
              <el-upload
                class="avatar-uploader"
                :action="$request.defaults.baseURL + '/uploads'"
                :show-file-list="false"
                :on-success="res => $set(item,'image',res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="model.items.splice(index, 1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AdEdit",
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: "",
        items: []
      }
    };
  },
  methods: {
    async save() {
      let res;
      // 判断是修改还是新建
      if (this.id) {
        res = await this.$request.put(`/rest/ads/${this.id}`, this.model);
      } else {
        res = await this.$request.post("/rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: `${this.id ? "修改" : "新建"}成功啦`
      });
    },
    async fetch() {
      const res = await this.$request.get(`/rest/ads/edit/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
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
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  min-width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  height: 178px;
  display: block;
}

.ad-image {
  margin-top: 1rem;
}
</style>