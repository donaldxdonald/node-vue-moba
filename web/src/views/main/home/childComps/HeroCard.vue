<template>
  <!-- <card>
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
  </card> -->
  <card :categories="categories">
    <card-head slot="card-head">
      <div slot="left" class="iconfont" :class="`icon-${icon}`"></div>
      <strong slot="center">{{title}}</strong>
      <div slot="right" class="iconfont icon-moreread"></div>
    </card-head>
    <img class="hero-banner w-100" src="@/assets/img/home/hero/718181004680072.jpg" alt="">
    <template #items="{category}">
      <div class="hero-flow mb-3 pb-2 dp-flex flex-wrap text-center">
        <router-link 
        tag="div"
        :to="`/heroes/${hero._id}`"
        class="hero-item mt-2" 
        v-for="(hero, index) in category.heroList" 
        :key="index">
          <img class="hero-icon w-100" :src="hero.avatar" alt="">
          <div>{{hero.name}}</div>
        </router-link>
      </div>
    </template>
      
  </card>
</template>

<script>
import CardHead from '@/components/content/card/CardHead'
import Card from '@/components/content/card/Card'
import NavBar from '@/components/content/navbar/NavBar'

export default {
  name: "HeroCard",
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true},
  },
  components: {
    Card,
    CardHead,
    NavBar
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
    async fetchHeroesCats() {
      const res = await this.$request.get('/heroes/list')
      this.categories = res.data  
      
    }
  },
  created () {
    this.fetchHeroesCats()
  }
}
</script>

<style lang="scss">

  .hero-banner {
    border-radius: 0.3846rem;
  }

  .hero-item {
    width: 17%;
    margin-right: 0.9692rem;
    .hero-icon {
      border-radius: 0.7692rem;
    }
  }
  .hero-item:nth-child(5n) {
    margin-right: 0;
  }
</style>