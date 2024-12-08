<script setup>
import { useScreens } from 'vue-screen-utils';

/*
  使用  vue-screen-utils 套件調整響應式設定
*/
const { mapCurrent } = useScreens({
  md: '768px',
});

// 在 767px 以下的手機版型，日曆元件的寬度呈現滿寬。
const isExpended = mapCurrent({ md: false }, true);
// 在 767px 以下的手機版型顯示 1 欄 1 列 ；在 768px 以上的平板與電腦版型顯示 2 欄 1 列。
const columns = mapCurrent({ md: 2 }, 1);
// 日曆標題在 767px 以下置中對齊，768px 以上靠左對齊。
const title = mapCurrent({ md: 'left' }, 'center');

// 日曆標題的日期格式需顯示「西元 YYYY 年 MM 月」。選取日期的格式需調整為 "YYYY-MM-DD"（年-月-日）。
/*
調整日期的格式
*/
const masks = ref({
  title: '西元 YYYY 年 MM 月',
  modelValue: 'YYYY-MM-DD',
});
// 日曆初始化時，預設的起始日期為當天，結束日期為當天的下一天。例如，當前日期為 12 月 1 日，則預設起始日期為 12 月 1 日，結束日期為 12 月 2 日。取得下一天日期的方法可以考這一篇 文章 。
const currentDate = new Date();

const getNextDays = (dateInput) => {
  const dateOutput = new Date(dateInput);
  dateOutput.setDate(dateOutput.getDate() + 1);
  return dateOutput;
};

const formatDate = (dateInput) => {
  const year = dateInput.getFullYear();
  const month = String(dateInput.getMonth() + 1).padStart(2, '0');
  const day = String(dateInput.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const date = ref({
  start: formatDate(currentDate),
  end: formatDate(getNextDays(currentDate)),
});

// 限制選取日期範圍，最早可選當天，最晚可選下一年的同一天。例如，當前日期是 2024 年 12 月 1 日，最早可選 2024 年 12 月 1 日，最晚可選 2025 年 12 月 1 日。
const getMaxDate = (dateInput) => {
  const outputDate = new Date(dateInput);
  outputDate.setFullYear(outputDate.getFullYear() + 1);
  return outputDate;
};
const minDate = ref(currentDate);
const maxDate = ref(getMaxDate(currentDate));

// 回報流程

/*
起始日期 => 當前日期
結束日期 => 下一天
日期格式需要是  YYYY-MM-DD

const date = ref({
  start: ...,
  end: ...,
});
*/
</script>

<template>
  <div class="container mt-5 date-picker">
    <ClientOnly>
      <!-- 加入 DatePicker 實作日期選取的功能  -->
      <VDatePicker
        v-model.range.string="date"
        :columns="columns"
        :title-position="title"
        :expanded="isExpended"
        :masks="masks"
        :min-date="minDate"
        :max-date="maxDate"
      />
      <!-- <DatePicker v-model.range.string="date"  /> -->
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.date-picker {
  // 使用 CSS 變數覆蓋 VCalendar 套件的預設樣式
  :deep(.vc-title) {
    background: none;
  }
  :deep(.vc-arrow) {
    background: none;
  }
  :deep(.vc-pane-layout) {
    gap: 60px;
  }
  :deep(.vc-light){

  }
  // 使用 CSS 變數覆蓋 VCalendar 套件的預設樣式，將選取日期的背景顏色修改為 #000000，選取區間的背景顏色修改為 #f9f9f9。
  :deep(.vc-highlight-bg-light ) {
    background-color: #f9f9f9;
  }
  :deep(.vc-highlight-bg-solid) {
    background-color: #000000;
  }
}
</style>
