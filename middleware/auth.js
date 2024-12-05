export default defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie('auth');

  if (!cookie.value) return navigateTo('/login');
  checkUser(cookie.value);
});

async function checkUser(cookie) {
  try {
    const response = await $fetch(`/user/check`, {
      baseURL: 'https://nuxr3.zeabur.app/api/v1',
      method: 'GET',
      headers: {
        Authorization: cookie,
      },
    });
    console.log("成功驗證");
  } catch (error) {
    console.log(error);
    return navigateTo("/login");
  }
}
