<template>
  <div class="card mt-3 bg-white">
    <div class="card-head">
      <slot name="card-head"></slot>
    </div>
    <div class="card-body px-4">
      <div class="fz-md nav pt-3 pb-2">
        <div class="nav-item" 
             v-for="(category, index) in categories" 
             :key="index"
             :class="{active: currentIndex === index}"
             @click="$refs.list.$swiper.slideTo(index+1)">
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper class="swiper" ref="list" :options="swiperOption" @slideChange="()=> currentIndex = $refs.list.$swiper.realIndex">
          <swiper-slide v-for="(category, index) in categories" :key="index">
            <!-- 将category作为参数传给slot -->
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import CardHead from './CardHead'
export default {
  name: "Card",
  props: {
    categories: {type: Array, require: true}
  },
  components: {
    CardHead
  },
  data () {
    return {
      currentIndex: 0,
      swiperOption: {
        loop: true
      }
    }
  }
}
</script>

<style>
  .card {
    box-shadow: 1px 1px 3px pink;
  }
</style>