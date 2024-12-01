<script setup>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const { isLoading, newsList, getNewList } = useHome();

onMounted(() => {
  getNewList();
});

// API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
// 使用 ES6 fetch() 或是 axios.get() 串接 API
// 切換 isLoading 狀態
</script>

<template>
  <div class="container">
    <h1>最新消息</h1>
    <NewsCard
      v-for="item in newsList"
      :key="item._id"
      :_id="item._id"
      :title="item.title"
      :image="item.image"
      :description="item.description"
      :createdAt="item.createdAt"
      :updatedAt="item.updatedAt"
    />
    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
