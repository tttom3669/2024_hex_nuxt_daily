# Day 17 - Nuxt3 插件 ( Plugins ) - directive 題目

請 clone 這一份模板，在 Nuxt3 中完成以下自定義指令的功能 :

- 在 `plugins/textformat.js` 中作答，建立名稱為 `textformat` 的指令，允許提供修飾符 `:uppercase` 和 `:lowercase` 實作大寫或小寫字母的轉換。
  - 當使用 `:uppercase` 時，將文字轉換為全大寫
  - 當使用 `:lowercase` 時，將文字轉換為全小寫。
    文字字串以及元素已於 `pages/index.vue` 中提供，如下

```html
<script setup>
  const message = ref("A1B2c3deFGhijk");
</script>

<template>
  <h2>自訂英文文字大小寫轉換指令</h2>
  <!-- 使用 plugins/textformat.js 建立的指令，將變數 message 的字串帶入 -->

  <!-- 大寫轉小寫格式之後，將結果寫入元素 -->
  <p></p>
  <!-- 小寫轉大寫格式之後，將結果寫入元素 -->
  <p></p>
</template>
```

- 在 `plugins/timeformat.js` 中作答，建立名稱為 `timeformat`的時間格式轉換指令，把傳入的時間戳轉換為 `yyyy-mm-dd hh:mm:ss`格式並顯示在頁面上。時間戳以及元素已於 `pages/index.vue` 中提供，如下

```html
<script setup>
  const time = ref(1730427600000);
</script>

<template>
  <h2>自訂時間轉換指令</h2>
  <!-- 使用 plugins/timeformat.js 建立的指令，將變數 time 的時間戳帶入 -->
  <!-- 轉換成 yyyy-mm-dd hh:mm:ss 格式之後將結果寫入元素 -->
  <!-- 1730427600000 => 轉換成 yyyy-mm-dd hh:mm:ss  -->
  <p></p>
</template>
```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day17-plugin-directive  https://github.com/jasonlu0525/nuxt3-live-question.git day17-plugin-directive-question
```

### 移動到專案內

```bash
cd  day17-plugin-directive-question
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
