<template>
  <div class="page-hero" v-if="hero">
    <card-head class="hero-top bg-black w-100">
      <img slot="left" class="logo_img" height="30" src="@/assets/img/logo.png" alt="">
      <div slot="center" class="mx-2 flex-1 dp-flex">
        <div class="text-white fz-md mr-3">王者荣耀</div>
        <div class="text-white fz-md">攻略站</div>
      </div>
      <router-link
      tag="div" 
      to="/"
      slot="right" 
      class="text-white">更多英雄 &gt;</router-link>
    </card-head>
    <div class="hh">{{hero.name}}</div>
  </div>
</template>

<script>
import CardHead from '@/components/content/card/CardHead'
export default {
  name: 'Hero',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  components: {
    CardHead
  },
  data () {
    return {
      hero: null
    }
  },
  methods: {
    async fetchHeroData() {
      const res = await this.$request.get(`/heroes/${this.id}`)
      this.hero = res.data
      
    }
  },
  created () {
    this.fetchHeroData()
  }
}
</script>

<style>
  .hero-top {
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .hh {
    margin-top: 3.4615rem;
  }
</style>