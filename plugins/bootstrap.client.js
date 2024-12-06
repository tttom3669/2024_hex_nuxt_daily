import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      bsModal: (dom) => new bootstrap.Modal(dom),
      bsOffcanvas: (dom) => new bootstrap.Offcanvas(dom),
    },
  };
});
