<template>
  <div class="card-head">
    <div class="card-head-left">
      <slot name="left"></slot>
    </div>
    <div class="card-head-center">
      <slot name="center"></slot>
    </div>
    <div class="card-head-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHead"
}
</script>

<style>
  .card-head {
    display: flex;
  }
</style>