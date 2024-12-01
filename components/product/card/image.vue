<script setup>
defineProps({
  imageSrc: String,
  altText: String,
});
</script>

<template>
  <div>
    <div class="product-image">
      <img :src="imageSrc" :alt="altText" />
    </div>
  </div>
</template>

<style>
.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

</style>
