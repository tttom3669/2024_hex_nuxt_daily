# Day 13 - SEO Meta Components 題目

請 clone 這一份模板，在 `/pages/room/[id].vue` 房型詳細頁面作答，完成以下條件 :

- **改寫 SEO Meta 設定**：
  - 將原本使用的 `useSeoMeta({ })` 方法，改為使用 Nuxt3 的 SEO 元件來渲染頁面的 Meta 標籤（如 `<Title>`、`<Meta>` 等）。
  - 使用 `computed` 計算出所需的 SEO Meta 資訊，避免重複邏輯，並將這些資料應用到 SEO 元件中。
  ```
  /*
  請將 useSeoMeta({ }) 改成 Nuxt3 SEO 元件的寫法
  重複邏輯的地方可以使用 computed
  */
  useSeoMeta({
    title: roomObject.value.name,
    titleTemplate: (title) => `Freyja | ${title}`,
    description: () => `${roomObject.value.description}`,
    ogTitle: () => `Freyja | ${roomObject.value.name}`,
    ogDescription: () => `${roomObject.value.description}`,
    ogImage: () => `${roomObject.value.imageUrl}`,
    ogUrl: () => `https://freyja.travel.com.tw/room/${roomObject.value._id}`,
    twitterCard: "summary_large_image",
    twitterTitle: () => `Freyja | ${roomObject.value.name}`,
    twitterDescription: () => `${roomObject.value.description}`,
    twitterImage: () => `${roomObject.value.imageUrl}`,
  });
  ```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day13-metacomponent-seo  https://github.com/jasonlu0525/nuxt3-live-question.git day13-metacomponent-seo-question
```

### 移動到專案內

```bash
cd  day13-metacomponent-seo-question
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
