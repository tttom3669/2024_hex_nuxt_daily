# Day 12 - useSeoMeta 與 useServerSeoMeta 題目

請 clone 這一份模板，在 `/pages/room/[id].vue` 房型詳細頁面作答，完成以下條件 :

- 在取得房型詳細資料的 `roomObject` 物件後，使用 `useSeoMeta` 將 `roomObject` 的資訊寫入 SEO Meta 。
- 伺服器端提交給搜尋引擎爬蟲以及客戶端渲染的 SEO Meta 皆使用使用下方結構的標籤。請撰寫 useSeoMeta({ }) 渲染出下方的 HTML 結構，並將 `{{ }}` 替換成使用 roomObject 物件的資料。

```

<title> Freyja | {{ 房型名稱 }}</title>
<meta name="description" content="{{ 房型描述 }}">
<meta property="og:title" content="Freyja | {{ 房型名稱 }} ">
<meta property="og:description" content="{{ 房型描述 }}">
<meta property="og:image" content="{{房型主圖}}">
<meta property="og:url" content="https://freyja.travel.com.tw/room/{房型 id }">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Freyja | {{ 房型名稱 }}">
<meta name="twitter:description" content="{{ 房型描述 }}">
<meta name="twitter:image" content="{{房型主圖}}">
```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day12-useseometa-seo  https://github.com/jasonlu0525/nuxt3-live-question.git day12-useseometa-seo-question
```

### 移動到專案內

```bash
cd  day12-useseometa-seo-question
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
