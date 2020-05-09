<template>
  <el-container style="height: 100vh">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router  unique-opened :default-active="$route.path" >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">物品</template>
          <el-menu-item index="/items/create">新建物品</el-menu-item>
          <el-menu-item index="/items/list">物品列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">英雄</template>
          <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
          <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">文章</template>
          <el-menu-item index="/articles/create">新建文章</el-menu-item>
          <el-menu-item index="/articles/list">文章列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>运营管理</template>
        <el-menu-item-group>
          <template slot="title">广告位</template>
          <el-menu-item index="/ads/create">新建广告</el-menu-item>
          <el-menu-item index="/ads/list">广告列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>系统设置</template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="/categories/create">新建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">管理员</template>
          <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
          <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-col :md="24">
      <el-header style="text-align: right; font-size: 12px">
      <el-button @click="logOff" class="log-off">注销</el-button>
      <i class="el-icon-user-solid"></i>
      <span>{{user}}</span>
    </el-header>
    
    <el-main>
      <!-- 绑定key区分使用同一组件的不同页面 -->
      <router-view :key="$route.path"></router-view>
    </el-main>
    </el-col>
  </el-container>
</el-container>
</template>

<style scoped>
  .el-header {
    background-color: #6097F4;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  .log-off {
    margin-right: 1rem;
  }
</style>

<script>
  export default {
    data() {
      return {
        user: ''
      }
    },
    created () {
      this.user = localStorage.user ? localStorage.user : '未知用户'
    },
    methods: {
      logOff() {
        this.$confirm("确定要注销吗？", "提示",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.clear()
          this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '已注销!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消注销'
          });          
        });
      }
    }
  };
</script>