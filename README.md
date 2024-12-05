# Day 15 - middleware 與登入狀態驗證 題目

請 clone 這一份模板，在 `/pages/login.vue` 與 `/pages/orders.vue` 作答，在登入後檢查帳號是否為登入狀態 :

- 在 `/login`頁面登入成功後，使用 router 導航至 `/orders` 頁面。
- 在進入 `/orders` 頁面之前使用名稱為 “auth” 的具名 middleware 驗證登入狀態。
- 驗證登入需使用旅館的 [/api/v1/user/check](https://nuxr3.zeabur.app/swagger/#/Users%20-%20%E4%BD%BF%E7%94%A8%E8%80%85/get_api_v1_user_check) API ，並使用 try catch 捕捉錯誤 。
- 驗證成功，允許進入 `/orders` 頁面。驗證失敗，將路由導航回 `/login` 頁面。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day15-nuxt3-middleware  https://github.com/jasonlu0525/nuxt3-live-question.git day15-nuxt3-middleware-question
```

### 移動到專案內

```bash
cd  day15-nuxt3-middleware-question
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
