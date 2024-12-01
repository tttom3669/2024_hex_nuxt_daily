<script setup>
defineProps({
  price: String,
});
</script>

<template>
  <div>
    <p class="product-price">{{ price }}</p>
  </div>
</template>

<style>
.product-price {
  font-size: 16px;
  color: #007bff;
  text-align: center;
  margin-bottom: 16px;
}
</style>
