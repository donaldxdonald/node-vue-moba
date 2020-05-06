<template>
  <card>
    <card-head slot="card-head">
      <div slot="left" class="iconfont icon-hero"></div>
      <strong slot="center">英雄列表</strong>
      <div slot="right" class="iconfont icon-moreread"></div>
    </card-head>
    <div class="card-body mt-2" slot="card-body">
      <img class="hero-banner w-100" src="@/assets/img/home/hero/718181004680072.jpg" alt="">
      <nav-bar :tabs='heroCardTabs'></nav-bar>
      <div class="hero-flow pb-3 dp-flex flex-wrap jc-between text-center">
        <div class="hero-item mt-2" v-for="(item, index) of 10" :key="index">
          <img class="hero-icon w-100" src="~@/assets/img/home/hero/106.jpg" alt="">
          <div>小乔</div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import CardHead from '@/components/content/card/CardHead'
import Card from '@/components/content/card/Card'
import NavBar from '@/components/content/navbar/NavBar'

export default {
  name: "HeroCard",
  components: {
    Card,
    CardHead,
    NavBar
  },
  data () {
    return {
      heroCardTabs: ['热门','战士','法师','坦克','刺客','射手','辅助'],
      
    }
  },
}
</script>

<style>
  .news-title {
    width: 80%;
  }

  .hero-banner {
    border-radius: 0.3846rem;
  }

  .hero-item {
    width: 17%;
  }
</style>