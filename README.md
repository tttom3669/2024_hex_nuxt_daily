# Day 11 - Global head Settings 與 useHead 題目

請 clone 這一份模板，在 `nuxt.config.ts` 與 `/pages/room/index.vue` 作答，完成以下條件 :

- 在 `nuxt.config.ts` 中定義全域設定，確保以下 head 資訊被應用於所有頁面。

```jsx

<title>Freyja | 高雄頂級旅館 - 提供奢華住宿體驗</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Freyja 旅館">
<meta name="keywords" content="Freyja,Freyja 訂房,高雄旅遊,訂房,住宿,住宿預訂,四人房,雙人房,景觀房">
<meta name="description" content="Freyja 旅館位於高雄，提供頂級的住宿體驗。享受絕美市景與高級設施，讓您的每一刻都充滿奢華與舒適。立即預訂，開啟難忘的住宿之旅！">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow">

<link rel="icon" href="/favicon.ico">
<link rel="canonical" href="https://freyja.travel.com.tw">

<meta property="fb:app_id" content="12345678" />
<meta property="og:locale"   content="zh-TW" />
<meta property="og:type"   content="website" />

<meta property="og:url"    content="https://freyja.travel.com.tw" />
<meta property="og:title" content="Freyja | 高雄頂級旅館 - 提供奢華住宿體驗" />
<meta property="og:image" content="https://freyja.travel.com.tw/images/og-image.jpg" />
<meta property="og:description" content="Freyja 旅館位於高雄，提供頂級的住宿體驗。享受絕美市景與高級設施，讓您的每一刻都充滿奢華與舒適。立即預訂，開啟難忘的住宿之旅！" />
```

- 在 `/pages/room/index.vue` 頁面中，使用 `useHead` 渲染以下 head 資訊，確保覆蓋全域設定中的對應屬性。

```jsx
<title>Freyja | 房型列表</title>
<meta name="description" content="探索 Freyja 頂級房型，從景觀尊榮家庭房到尊爵雙人房，享受絕美市景與舒適空間。立即預訂，享受獨特的住宿體驗！">

<meta property="og:title" content="Freyja | 高雄最頂級的旅館">
<meta property="og:description" content="探索 Freyja 的高雄頂級房型，從景觀尊榮家庭房到尊爵雙人房，享受絕美市景與舒適空間。立即預訂，享受獨特的住宿體驗！">
<meta property="og:image" content="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png">
<meta property="og:url" content="https://freyja.travel.com.tw/room">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Freyja | 高雄最頂級的旅館">
<meta name="twitter:description" content="探索 Freyja 的高雄頂級房型，從景觀尊榮家庭房到尊爵雙人房，享受絕美市景與舒適空間。立即預訂，享受獨特的住宿體驗！">
<meta name="twitter:image" content="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png">
```

- 確認 `/pages/room/index.vue` 頁面的 head 設定成功覆蓋了全域 head 中的相同屬性設定。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day11-usehead-seo   https://github.com/jasonlu0525/nuxt3-live-question.git  day11-usehead-seo-question
```

### 移動到專案內

```bash
cd day11-usehead-seo-question
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
