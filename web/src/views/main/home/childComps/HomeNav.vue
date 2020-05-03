<template>
  <div class="home-nav">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(banner, index) in banners" :key="index">
        <img class="w-100" :src="banner" alt="">
      </swiper-slide>
    <div class="swiper-pagination pagination-home text-right px-3" 
    slot="pagination"
    ></div>
    </swiper>
  </div>
</template>

<script>

import image1 from '@/assets/img/swiper/0181ecf7eda7589f0e780207e135f974.jpeg'
import image2 from '@/assets/img/swiper/b7e66357d69215808422a7c1f1e79d27.jpeg'
import image3 from '@/assets/img/swiper/d41dfc1e23629c7c16c42d7ddedbcda9.jpeg'

export default {
  name: "HomeNav",
  data () {
    return {
      banners: [
        image1,
        image2,
        image3
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  },
}
</script>

<style lang="scss">
  .pagination-home {
    .swiper-pagination-bullet {
      background: #fff!important;
      border-radius: 0.1538rem;
    }
  }
</style>