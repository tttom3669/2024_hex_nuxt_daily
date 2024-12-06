# Day 18 - Nuxt3 插件 ( Plugins ) - 整合 Vue3 插件 題目

請 clone 這一份模板，完成以下條件 :

- 在 `plugins/loading.js` 中使用 Nuxt3 插件系統整合 [vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay) 套件。
- 套件整合後，在 `/pages/index.vue` 中透過按鈕點擊的方式開啟與關閉讀取效果。

```jsx
<script setup>
function openLoading() {
  // 開啟讀取效果
  setTimeout(() => {
     // 關閉讀取效果
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>
```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day18-plugin-use  https://github.com/jasonlu0525/nuxt3-live-question.git day18-plugin-use-question
```

### 移動到專案內

```bash
cd day18-plugin-use-question
```

### 安裝套件

```bash
npm install
```

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3000/
```
