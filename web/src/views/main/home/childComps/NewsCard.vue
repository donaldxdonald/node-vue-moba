<template>
  <card :categories="categories">
    <card-head slot="card-head">
      <div slot="left" class="iconfont" :class="`icon-${icon}`"></div>
      <strong slot="center">{{title}}</strong>
      <div slot="right" class="iconfont icon-moreread"></div>
    </card-head>
    <template #items="{category}">
      <div class="news-item ai-center dp-flex fz-lg mb-3" v-for="(items, index) in category.newsList" :key="index">
        <div class="news-cate mr-1 text-info">[{{items.categoryName}}]</div>
        <div class="news-title flex-1 text-ellipsis pr-2">{{items.title}}</div>
        <div class="news-time fz-sm text-dark-1">{{items.createdAt | date}}</div>
      </div>
    </template>
      
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
    categories: {type: Array, required: true}
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  .news-title {
    width: 80%;
  }
</style>