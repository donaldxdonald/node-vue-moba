<template>
  <div class="card-head ai-center dp-flex px-4 py-2">
    <div class="card-head-left mr-2">
      <slot name="left"></slot>
    </div>
    <div class="card-head-center flex-1 fz-xl">
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
</style>