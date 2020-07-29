<template>
  <card :categories="categories">
    <card-head slot="card-head">
      <div slot="left" class="iconfont" :class="`icon-${icon}`"></div>
      <strong slot="center">{{title}}</strong>
      <div slot="right" class="iconfont icon-moreread"></div>
    </card-head>
    <template #items="{category}">
      <router-link 
      tag="div"
      :to="`/articles/${news._id}`"
      class="news-item ai-center dp-flex fz-lg mb-3" 
      v-for="(news, index) in category.newsList" 
      :key="index">
        <div class="news-cate mr-1 text-info">[{{news.categoryName}}]</div>
        <div class="news-title flex-1 text-ellipsis pr-2">{{news.title}}</div>
        <div class="news-time fz-sm text-dark-1">{{news.createdAt | date}}</div>
      </router-link>
    </template>
      
  </card>
</template>

<script>
import dayjs from 'dayjs'
import CardHead from '@/components/content/card/CardHead'
import Card from '@/components/content/card/Card'
import NavBar from '@/components/content/navbar/NavBar'

export default {
  name: "NewsCard",
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  components: {
    Card,
    CardHead,
    NavBar
  },
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true},
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$request.get('/news/list')
      this.categories = res.data  
      
    }
  },
  created () {
    this.fetchNewsCats()
  }
}
</script>

<style>
  .news-title {
    width: 80%;
  }
</style>