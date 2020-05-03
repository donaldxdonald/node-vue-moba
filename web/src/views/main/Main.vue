<template>
  <div class="main-page">
    <div class="topbar bg-black dp-flex ai-center py-2 px-3">
      <img class="logo_img" height="30" src="@/assets/img/logo.png" alt="">
      <div class="mx-2 flex-1">
        <div class="text-white fz-md">王者荣耀</div>
        <div class="text-grey-1 fz-xxs">团队成就更多</div>
      </div>
      <button class="btn bg-primary">立即下载</button>
    </div>
    <div class="fz-lg nav-reverse nav pt-2 pb-2 px-3">
      <div class="nav-item active">
        <router-link tag='div' to='/'>首页</router-link>
      </div>
      <div class="nav-item">
        <router-link tag='div' to='/'>攻略中心</router-link>
      </div>
      <div class="nav-item">
        <router-link tag='div' to='/'>赛事中心</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Main',
  components: {
  }
}
</script>

<style scoped>
</style>
