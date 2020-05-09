<template>
  <div class="main-page">
    <card-head class="home-top bg-black w-100">
      <img slot="left" class="logo_img" height="30" src="@/assets/img/logo.png" alt="">
      <div slot="center" class="mx-2 flex-1">
        <div class="text-white fz-md">王者荣耀</div>
        <div class="text-grey-1 fz-xxs">团队成就更多</div>
      </div>
      <button slot="right" class="btn bg-primary">立即下载</button>
    </card-head>
    <nav-bar class="home-bottom nav-inverse px-5" :tabs='mainTabs'></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import CardHead from '@/components/content/card/CardHead'
import NavBar from '@/components/content/navbar/NavBar'

export default {
  name: 'Main',
  components: {
    CardHead,
    NavBar
  },
  data () {
    return {
      mainTabs: ['首页','攻略中心','赛事中心']
    }
  }
}
</script>

<style>
  .home-top {
    position: fixed;
    top: 0;
    z-index: 999;
  }

  .home-bottom {
    margin-top: 3.4615rem;
  }
</style>
