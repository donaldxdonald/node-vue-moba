<template>
  <div class="card mt-3 bg-white">
    <div class="card-head">
      <slot name="card-head"></slot>
    </div>
    <div class="card-body px-4">
      <slot name="card-body"></slot>
    </div>
  </div>
</template>

<script>
import CardHead from './CardHead'
export default {
  name: "Card",
  components: {
    CardHead
  }
}
</script>

<style>
  .card {
    box-shadow: 1px 1px 3px pink;
  }
</style>