<template>
  <div class="item-list">
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240">
      </el-table-column>
      <el-table-column prop="name" label="物品名称" width="240">
      </el-table-column>
      <el-table-column prop="icon" label="图标" width="240">
        <template slot-scope="scope">
          <img :src="scope.row.icon" class="item-icon" alt="">
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/items/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  data () {
    return {
      items: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$request.get('/rest/items')
      this.items = res.data
      
    },
    async remove(row){
      this.$confirm(`是否确认删除分类 "${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$request.delete(`/rest/items/${row._id}`)
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