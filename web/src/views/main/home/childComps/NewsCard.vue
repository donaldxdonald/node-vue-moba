<template>
  <card>
    <card-head slot="card-head">
      <div slot="left" class="iconfont" :class="`icon-${icon}`"></div>
      <strong slot="center">{{title}}</strong>
      <div slot="right" class="iconfont icon-moreread"></div>
    </card-head>
    <div class="card-body" slot="card-body">
      <nav-bar :tabs='tabs'></nav-bar>
      <div class="list-card" v-for="(item, index) in categories" :key="index" >
      </div>
      <!-- <swiper class="swiper">
        <swiper-slide>Slide 1</swiper-slide>
      </swiper> -->
      <!-- <div class="news-flow pb-2">
        <div class="news-item ai-center dp-flex fz-lg mb-3" >
          <div class="news-cate mr-1">[{{item.cate}}]</div>
          <div class="news-title flex-1 text-ellipsis">{{item.title}}</div>
          <div class="news-time fz-sm">{{item.create_time}}</div>
        </div>
      </div> -->
    </div>
  </card>
</template>

<script>
import CardHead from '@/components/content/card/CardHead'
import Card from '@/components/content/card/Card'
import NavBar from '@/components/content/navbar/NavBar'

export default {
  name: "NewsCard",
  components: {
    Card,
    CardHead,
    NavBar
  },
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true},
    categories: {type: Array, required: true}
  },
  created () {
    this.getTabs()
  },
  data () {
    return {
      tabs: []
    }
  },
  methods: {
    getTabs() {
      this.categories.map(i => this.tabs.push(i.name))
      console.log(this.tabs);
      
    }
  }
}
</script>

<style>
  .news-title {
    width: 80%;
  }
</style>