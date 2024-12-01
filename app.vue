<script setup lang="ts"></script>

<template>
  <div>
    <h1>最外層的 App.vue</h1>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.list {
  display: flex;
  list-style: none;
  gap: 2rem;
}
</style>
