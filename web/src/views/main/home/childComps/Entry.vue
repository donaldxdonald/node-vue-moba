<template>
  <div class="entry">
    <div class="entry-container fz-sm text-grey-1 bg-white dp-flex flex-wrap text-center mt-3 pt-3">
      <div class="entry-item px-4 py-2  mb-4"
           v-for="item in 10" 
           :key="item.index"
           >
      <i class="sprite"></i>
      <div class="">爆料站</div>
      </div>
    </div>
    <div class="bg-light jc-center ai-center py-2 dp-flex">
      <i class="sprite sprite-arrow mr-2"></i>
      <span class="fz-sm">收起</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry"
};
</script>

<style lang="scss">
  @import '@/assets/scss/_variables.scss';

  .entry {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
  }
  .entry-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n+1) {
      border-left: none;
    }
  }
</style>