<template>
  <div class="nav-bar fz-md nav pt-3 pb-2">
      <div class="nav-item" v-for="(item, index) in tabs"
           :key="index" 
           :class="{active: index == currentIndex}"
           @click="itemClick(index)" >
        <router-link tag='span' to='/'>{{item}}</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
</style>