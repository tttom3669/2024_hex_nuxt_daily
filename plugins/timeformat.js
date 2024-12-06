import { data } from 'browserslist';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('timeformat', {
    mounted(el, binding) {
      const { value } = binding;
      const date = new Date(value);
      const formatNum = (num) => {
        return String(num).padStart(2, '0');
      };
      const year = date.getFullYear();
      const month = formatNum(date.getMonth() + 1);
      const day = formatNum(date.getDay());
      const hour = formatNum(date.getHours());
      const minutes = formatNum(date.getMinutes());
      const seconds = formatNum(date.getSeconds());

      el.textContent = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    },
  });
});
