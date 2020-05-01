<template>
  <div class="ad-list">
    <el-table :data="ads">
      <el-table-column prop="_id" label="ID" width="240">
      </el-table-column>
      <el-table-column prop="name" label="广告名称" width="240">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/ads/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AdList",
  data () {
    return {
      ads: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$request.get('/rest/ads')
      this.ads = res.data
      
    },
    async remove(row){
      this.$confirm(`是否确认删除广告 "${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$request.delete(`/rest/ads/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
      
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style scoped>
  .item-icon{
    height: 3rem;
  }

</style>