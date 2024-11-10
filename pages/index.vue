<script setup>
  const route = useRoute();
</script>

<template>
  <div>
    <h1>Page: 首頁</h1>
    <p>目前的路徑 - route.fullPath 為 {{  route.fullPath }}</p>
  </div>
</template>

<style scoped></style>
