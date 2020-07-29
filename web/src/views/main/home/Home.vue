<template>
  <div class="home">
    <home-nav/>
    <entry/>
    <news-card icon='Menu' title='新闻资讯'/>
    <hero-card icon='hero' title='英雄列表'/>
    <video-card/>
    <video-card/>
  </div>
</template>

<script>


import HomeNav from './childComps/HomeNav'
import Entry from './childComps/Entry'
import NewsCard from './childComps/NewsCard'
import HeroCard from './childComps/HeroCard'
import VideoCard from './childComps/VideoCard'

export default {
  name: "Home",
  components: {
    HomeNav,
    Entry,
    NewsCard,
    HeroCard,
    VideoCard
  },
  data () {
    return {
      newsCats: []
    }
  },
  
}
</script>

<style lang="scss">
  
</style>