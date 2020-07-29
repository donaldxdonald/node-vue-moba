<template>
  <div class="page-article">
    <div class="dp-flex ai-center border-bottom">
      <div class="iconfont icon-back m-1" @click="$router.back()"></div>
      <h2 class="text-ellipsis mr-3 text-blue fz-md flex-1">{{article.title}}</h2>
      <div class="fz-xs mr-2 text-grey">{{article.createdAt | date}}</div>
    </div>
    <div v-html="article.content" class="px-4 content fz-xl"></div>
    <div class="dp-flex ai-center mx-2 fz-lg mt-2">
      <i class="iconfont icon-Menu mx-2"></i>
      <strong class="text-blue">相关资讯</strong>
    </div>
    <div class="mx-3 my-2">
      <router-link 
      tag="div"
      :to="`/articles/${item._id}`"
      class="dp-flex ai-center mb-1" 
      v-for="(item, index) in article.related" 
      :key="index">
        <div class="text-ellipsis fz-md mr-4 flex-1">{{item.title}}</div>
        <div class="fz-sm text-grey mr-3">{{item.createdAt | date}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'Article',
  filters: {
    date(val) {
      return dayjs(val).format('YYYY-MM-DD')
    }
  },
  props: {
    id: {type: String, default: ''}
  },
  created () {
    this.fetchArticleData()
  },
  data () {
    return {
      article: {}
    }
  },
  methods: {
    async fetchArticleData() {
      const res = await this.$request.get(`/articles/${this.id}`)
      this.article = res.data
      
    }
  }
}
</script>

<style lang="scss">
  .page-article {
    .content {
      img {
        width: 100%;
        height: auto;
      }
      iframe {
        width: 100%;
        height: auto;
      }
    }
  }
</style>