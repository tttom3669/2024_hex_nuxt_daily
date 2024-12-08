# Day 23 - VCalendar 套件運用 題目

請 clone 這一份模板，完成以下條件 :

- 模板中的 `package.json` 已包含 VCalendar 套件，請將它安裝並整合到 Nuxt3 中。
- 請在 `/pages/index.vue` 作答，完成以下日曆選取功能的設定 :
  - 在 767px 以下的手機版型顯示 1 欄 1 列 ；在 768px 以上的平板與電腦版型顯示 2 欄 1 列。此功能需要使用 [vue-screen-utils](https://github.com/nathanreyes/vue-screen-utils) 套件進行響應式調整，該套件已在 `package.json` 中提供。
  - 在 767px 以下的手機版型，日曆元件的寬度呈現滿寬。
  - 日曆標題在 767px 以下置中對齊，768px 以上靠左對齊。
  - 日曆標題的日期格式需顯示`「西元 YYYY 年 MM 月」`。選取日期的格式需調整為 `"YYYY-MM-DD"`（年-月-日）。
  - 日曆初始化時，預設的起始日期為當天，結束日期為當天的下一天。例如，當前日期為 12 月 1 日，則預設起始日期為 12 月 1 日，結束日期為 12 月 2 日。取得下一天日期的方法可以考這一篇 [文章](https://www.cythilya.tw/2017/05/17/javascript-date-add-days/) 。
  - 限制選取日期範圍，最早可選當天，最晚可選下一年的同一天。例如，當前日期是 2024 年 12 月 1 日，最早可選 2024 年 12 月 1 日，最晚可選 2025 年 12 月 1 日。
  - 使用 CSS 變數覆蓋 VCalendar 套件的預設樣式，將選取日期的背景顏色修改為 `#000000`，選取區間的背景顏色修改為 `#f9f9f9`。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day23-vcalendar  https://github.com/jasonlu0525/nuxt3-live-question.git day23-vcalendar-question
```

### 移動到專案內

```bash
cd day23-vcalendar-question
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
