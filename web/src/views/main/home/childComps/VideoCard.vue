<template>
  <card>
    <card-head slot="card-head">
      <div slot="left" class="iconfont icon-video"></div>
      <strong slot="center">精彩视频</strong>
      <div slot="right" class="iconfont icon-moreread"></div>
    </card-head>
    <div class="card-body" slot="card-body">
      <nav-bar :tabs='videoCardTabs'></nav-bar>
      <div class="video-flow mt-2 dp-flex flex-wrap jc-between">
        <div class="video-item mb-2" v-for="(item, index) of 4" :key="index">
          <img class="w-100" src="~@/assets/img/home/video/d6aa98398d49a3cd42996090e3467571.1588140954.0240446eb635984b0f136ecfc0259286.230x140_51672.jpg" alt="">
          <div class="video-title my-2">【大仙不闹】一年给王者荣耀充了10万，还是被人按在地上锤</div>
          <div class="video-info text-grey dp-flex jc-between fz-xs ai-center">
            <div class="left dp-flex ai-center">
              <span class="iconfont icon-video mr-1"></span>
              <span>4213</span>
            </div>
            <div class="right">
              <span class="create-time">05-06</span>
            </div>
          </div>
        </div>
        <div class="loadmore w-100">
          <div class="my-3 text-center">加载更多内容</div>
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
  name: "VideoCard",
  components: {
    Card,
    CardHead,
    NavBar
  },
  data () {
    return {
      videoCardTabs: ['精彩栏目','英雄攻略','赛事精品','赛事视频'],
      
    }
  },
}
</script>

<style lang='scss'>
  .video-item {
    width: 49%;
    
    img {
      border-radius: 5px
    }
  }

  .video-title {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  .loadmore {
    border-top: 1px solid #d4d9de;
  }
</style>