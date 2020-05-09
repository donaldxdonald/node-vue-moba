<template>
  <div class="home">
    <home-nav/>
    <entry/>
    <news-card icon='Menu' title='新闻资讯' :categories='newsCats'/>
    <hero-card/>
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
      // [
      //   {
      //     name: '热门',
      //     list: [
      //       {
      //         cate: '活动',
      //         title: '五五开黑节，赵云-龙胆即将上架，多重福利来袭',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“五五打卡游”活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '新闻',
      //         title: '最是一年上星时——《王者荣耀》五五开黑节荣获App Store推荐',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“峡谷寻宝第二话——传说史诗皮肤自选寻宝活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '公告',
      //         title: '关于微社区熟练度铭文奖励领取活动暂时关闭说明',
      //         create_time: '05/05'
      //       }
      //     ]
      //   },
      //   {
      //     name: '新闻',
      //     list: [
      //       {
      //         cate: '活动',
      //         title: '五五开黑节，赵云-龙胆即将上架，多重福利来袭',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“五五打卡游”活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '新闻',
      //         title: '最是一年上星时——《王者荣耀》五五开黑节荣获App Store推荐',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“峡谷寻宝第二话——传说史诗皮肤自选寻宝活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '公告',
      //         title: '关于微社区熟练度铭文奖励领取活动暂时关闭说明',
      //         create_time: '05/05'
      //       }
      //     ]
      //   },
      //   {
      //     name: '公告',
      //     list: [
      //       {
      //         cate: '活动',
      //         title: '五五开黑节，赵云-龙胆即将上架，多重福利来袭',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“五五打卡游”活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '新闻',
      //         title: '最是一年上星时——《王者荣耀》五五开黑节荣获App Store推荐',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“峡谷寻宝第二话——传说史诗皮肤自选寻宝活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '公告',
      //         title: '关于微社区熟练度铭文奖励领取活动暂时关闭说明',
      //         create_time: '05/05'
      //       }
      //     ]
      //   },
      //   {
      //     name: '活动',
      //     list: [
      //       {
      //         cate: '活动',
      //         title: '五五开黑节，赵云-龙胆即将上架，多重福利来袭',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“五五打卡游”活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '新闻',
      //         title: '最是一年上星时——《王者荣耀》五五开黑节荣获App Store推荐',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“峡谷寻宝第二话——传说史诗皮肤自选寻宝活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '公告',
      //         title: '关于微社区熟练度铭文奖励领取活动暂时关闭说明',
      //         create_time: '05/05'
      //       }
      //     ]
      //   },
      //   {
      //     name: '赛事',
      //     list: [
      //       {
      //         cate: '活动',
      //         title: '五五开黑节，赵云-龙胆即将上架，多重福利来袭',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“五五打卡游”活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '新闻',
      //         title: '最是一年上星时——《王者荣耀》五五开黑节荣获App Store推荐',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '活动',
      //         title: '“峡谷寻宝第二话——传说史诗皮肤自选寻宝活动开启',
      //         create_time: '05/05'
      //       },
      //       {
      //         cate: '公告',
      //         title: '关于微社区熟练度铭文奖励领取活动暂时关闭说明',
      //         create_time: '05/05'
      //       }
      //     ]
      //   },
      // ]
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$request.get('/news/list')
      this.newsCats = res.data  
      
    }
  },
  created () {
    this.fetchNewsCats()
  }
}
</script>

<style lang="scss">
  
</style>