# Day 24 - 實作預約房型功能 題目

請 clone 這一份模板，根據今日學習的內容完成房型預約功能。具體需求如下：

- 當使用者進入 `/rooms/{roomId}/booking` 頁面，需取得該房型的詳細資訊、入住期間和人數並檢查登入狀態。若未登入需導向至 `/login` 頁面。
- 完成 `/rooms/{roomId}/booking` 頁面的表單驗證與訂房功能。
- 訂房成功後，跳轉至 `/booking/{orderId}`，取得訂單資料並顯示在畫面上。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day24-booking  https://github.com/jasonlu0525/nuxt3-live-question.git day24-booking-question
```

### 移動到專案內

```bash
cd day24-booking-question
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
