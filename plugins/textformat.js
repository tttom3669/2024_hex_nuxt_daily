export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('textformat', {
    mounted(el, binding) {
      const { value, arg } = binding;
    
      const formatFun = {
        uppercase: (str) => str.toUpperCase(),
        lowercase: (str) => str.toLowerCase(),
      };

      el.textContent = formatFun[arg](value);
    },
  });
});
