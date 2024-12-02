# Day 8 - 動態路由與 404 錯誤頁面處理 題目

請 clone 這一份模板，接續 Day7 嵌套式路由的問題，實作房型詳細頁面的動態路由 :

- 將 `pages/room/_id.vue` 調整成房型內頁的動態路由。
- 在 `pages/room/index.vue` 的房型列表中，點擊房型後能夠進入房型內頁。進入房型內頁後，透過動態路由的網址參數 [串接 `/api/v1/rooms/{id}` 這支 API](https://nuxr3.zeabur.app/swagger/#/Rooms%20-%20%E6%88%BF%E5%9E%8B/get_api_v1_rooms__id_) 來取得房型詳細資料。可以使用 `fetch` 或 `axios` 來串接 API。
- 取得房型資料後，將資料內容渲染在畫面上。畫面的 HTML 、CSS 已有在 `pages/room/_id.vue` 提供。
- 將 pages/notfound.vue 調整成全站的 404 頁面。畫面的 HTML 和 CSS 已經在 `pages/notfound.vue` 中提供。請在 `{{ page }}` 中渲染當前訪問頁面的路由路徑，並提供一個返回首頁的連結。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day8-dynamic-router  https://github.com/jasonlu0525/nuxt3-live-question.git day8-dynamic-router-question
```

### 移動到專案內

```bash
cd day8-dynamic-router-question
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
