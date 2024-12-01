<script setup>
defineProps({
  title:String
})
</script>

<template>
  <div>
    <h2 class="product-title">{{ title }}</h2>
  </div>
</template>

<style>
.product-title {
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0 8px;
  text-align: center;
}

</style>