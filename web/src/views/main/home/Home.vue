<template>
  <div class="home">
    <home-nav/>
    <entry/>
    <card-head>
      <i slot="left"></i>
      <div slot="center">新闻资讯</div>
      <div slot="right">...</div>
    </card-head>
  </div>
</template>

<script>
import CardHead from '@/components/content/card/CardHead'

import HomeNav from './childComps/HomeNav'
import Entry from './childComps/Entry'

export default {
  name: "Home",
  components: {
    HomeNav,
    Entry,
    CardHead
  },
  data () {
    return {
      
    }
  },
}
</script>

<style lang="scss">
  
</style>