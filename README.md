# Day 19 - Nuxt3 狀態管理 - Pinia - ( 1 ) 問題

請 clone 這一份模板，完成以下條件 :

- 在 `nuxt.config.ts` 添加 `@pinia/nuxt` 模組，讓它在 Nuxt 中可以運作。
- 在 `stores/booking.js` 建立一個名為 `useBookingStore` 的 Pina store ，用來管理訂單資訊。

  ```jsx
  // /stores/booking.js
  // 建立名稱為 useBookingStore 的 store

  // export const xxx = ... ;
  ```

- 使用 `/pages/index.vue` 的 `createOrder()` 方法建立訂單，將被選取的房型 `roomInfo` 和訂房人資料 `userInfo` 整合為 `bookingResult`，並將 `bookingResult` 移至 `useBookingStore` 中進行狀態管理 ( 格式如下 )。完成後，使用 `useRouter` 的方法導引至 `/order` 頁面。

  ```jsx

  /pages/index.vue

  // 訂單資訊的格式
  const bookingResult = ref({});

  // 建立訂單
  const createOrder = (roomInfo, userInfo) => {
    // 1. 將選取的房型以及訂房人資訊整合成訂單資訊 ( bookingResult )
    /* 格式
    {
      ...roomInfo,  // 將被選取的房型以解構的方式合併
      user: {
        ...userInfo, // 將訂房人資料以解構的方式合併
      },
    };
    */
    // 2. 將 bookingResult 改成用 pinia 管理狀態


    // 3. 使用 router 將頁面導引至 /order
  };
  ```

- 進入 `/order` 頁面後，從 `useBookingStore` 中取出訂單資料 `bookingResult` 並顯示於頁面中。如果沒有訂單資料，顯示 "目前沒有預訂資訊"。

  ```jsx
  // /pages/order
  <script setup>
  // 1. 從 useBookingStore 取出資料 bookingResult

  const bookingResult = ref({});
  </script>

  <template>
    <div class="container mt-5">
      <template v-if="bookingResult.name">
        <!-- 2. 渲染至 HTML  ( 在模板有提供 HTML 結構 )-->

      </template>
      <template v-else>
        <h1>目前沒有預訂資訊</h1>
      </template>
      <NuxtLink class="btn btn-primary" to="/">回上一頁</NuxtLink>
    </div>
  </template>

  ```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day19-pinia https://github.com/jasonlu0525/nuxt3-live-question.git day19-pinia-question
```

### 移動到專案內

```bash
cd day19-pinia-question
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
