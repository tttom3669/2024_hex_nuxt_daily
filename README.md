# Day 20 - Nuxt3 狀態管理 - Pinia - ( 2 ) 題目

根據最終任務訂房網站 [設計稿](https://www.figma.com/design/6pTFrdb5a1lYKmMnFeT5Mf/%E5%85%AD%E8%A7%92-Project-%2F-%E9%85%92%E5%BA%97%E8%A8%82%E6%88%BF%E7%B6%B2%E7%AB%99?t=wmvFC4GdPPgblvwT-0) ，在訂房流程中，當使用者在「房型詳細頁」點擊「立即預訂」按鈕後需呈現該房型的詳細資訊。因此需要將房型詳細資料加入全域狀態管理。

請 clone 這一份模板，完成以下條件 :

- 在 `/pages/room.vue` 的房型列表中，點擊房型進入房型詳細頁（`/pages/room/[id].vue`），將取得的房型資料寫入 Pinia Store ，並渲染於頁面模板。

```jsx
// 將房型資料 data 改成使用 Pinia 管理
const { data, error } = await useAsyncData(`room-data`, async () => {
  const response = await $fetch(`/rooms/${id}`, {
    baseURL: "https://nuxr3.zeabur.app/api/v1",
  });
  return response.result;
});
```

- 在房型詳細頁點擊「立即預訂」按鈕後，導向 `/pages/booking.vue` 預約頁面。在此頁面中，將房型資料從 Pinia Store 取出，渲染於頁面模板。

```jsx
// /pages/booking.vue

<script setup>
  // 將 bookingInfo 改成使用 Pinia 的資料 const bookingInfo = ref({});
</script>
```

- 補充，Pinia Store 的檔案已於 `stores/booking.js` 提供，請將匯出的 Store 名稱命名為 `useBookingStore` 。

```jsx
/stores/booking.js
// export const useBookingStore =
```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day20-pinia-api  https://github.com/jasonlu0525/nuxt3-live-question.git day20-pinia-api-question
```

### 移動到專案內

```bash
cd day20-pinia-api-question
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
