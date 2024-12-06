<script setup>
import { useLoading } from 'vue-loading-overlay';

const loading = useLoading()

function openLoading() {
  const loader = loading.show(); 
  // 開啟讀取效果
  setTimeout(() => {
    // 關閉讀取效果
    loader.hide();
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>
