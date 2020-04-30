<template>
  <div class="item-list">
    <el-table :data="heroes">
      <el-table-column prop="_id" label="ID" width="240">
      </el-table-column>
      <el-table-column prop="name" label="英雄名称" width="120">
      </el-table-column>
      <el-table-column prop="title" label="英雄称号" width="120">
      </el-table-column>
      <el-table-column prop="categories" label="类别" width="240">
      </el-table-column>
      <el-table-column prop="avatar" label="图标" width="240">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" class="item-avatar" alt="">
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/heroes/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "HeroList",
  data () {
    return {
      heroes: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$request.get('/rest/heroes')
      this.heroes = res.data
      
    },
    async remove(row){
      this.$confirm(`是否确认删除分类 "${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$request.delete(`/rest/heroes/${row._id}`)
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
  .item-avatar{
    height: 3rem;
    width: 3rem;
  }

</style>