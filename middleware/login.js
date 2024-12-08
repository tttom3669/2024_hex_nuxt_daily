export default defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie('accountToken');
  if (!cookie.value) return navigateTo('/login');
  checkUser();
});

async function checkUser() {  
  try {
    const cookie = useCookie('accountToken');
    const res = await $fetch(`/api/v1/user/check`, {
      baseURL:'https://nuxr3.zeabur.app',
      method: 'GET',
      headers: {
        Authorization: cookie.value,
      },
    });
  } catch (error) {
    console.log(error);

    return navigateTo('/login');
  }
}
