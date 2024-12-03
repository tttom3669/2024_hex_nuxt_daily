<script setup>
const { $swal } = useNuxtApp();

// 表單格式
const userRegisterObject = ref({
  name: '',
  email: '',
  password: '',
  phone: '',
  birthday: '',
  address: {
    zipcode: '',
    detail: '',
  },
});

const registerUser = async () => {
  try {
    console.log(userRegisterObject.value);
    
    const response = await $fetch(`/api/v1/user/signup`, {
      method: 'POST',
      baseURL: 'https://nuxr3.zeabur.app/',
      body: userRegisterObject.value,
    });
    console.log(response);
    
    $swal.fire({
      position: 'center',
      icon: 'success',
      title: '註冊成功',
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.log(error);

    $swal.fire({
      position: 'center',
      icon: 'error',
      title: '註冊失敗',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

// 使用 sweetAlert2 套件顯示訊息
// $swal.fire({
//   position: "center",
//   icon: ...,
//   title: ...,
//   showConfirmButton: false,
//   timer: 1500,
// });
</script>

<template>
  <div class="bg-light py-3 py-md-5 vh-100">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <div class="bg-white p-4 p-md-5 rounded shadow-sm">
            <h2 class="h3 mb-4">會員註冊</h2>
            <form @submit.prevent="registerUser">
              <div class="form-floating mb-4">
                <input
                  v-model="userRegisterObject.name"
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="王小明"
                  required
                />
                <label for="firstName"
                  >姓名 <span class="text-danger">*</span></label
                >
              </div>

              <div class="form-floating mb-4">
                <input
                  type="email"
                  v-model="userRegisterObject.email"
                  class="form-control"
                  id="email"
                  placeholder="example@gmail.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                />
                <label for="email"
                  >信箱 <span class="text-danger">*</span></label
                >
              </div>

              <div class="form-floating mb-4">
                <input
                  type="password"
                  v-model="userRegisterObject.password"
                  class="form-control"
                  id="password"
                  placeholder="請輸入 8 碼以上密碼"
                  pattern=".{8,}"
                  required
                />
                <label for="password"
                  >密碼 <span class="text-danger">*</span></label
                >
              </div>

              <div class="form-floating mb-4">
                <input
                  type="tel"
                  v-model="userRegisterObject.phone"
                  class="form-control"
                  id="phone"
                  placeholder="0912345678"
                  pattern="(\+886|0)?9\d{8}|(\+886|0)?2\d{8}|\d{3}-\d{4}-\d{4}"
                  required
                />
                <label for="phone">電話</label>
              </div>

              <div class="form-floating mb-4">
                <input
                  type="date"
                  v-model="userRegisterObject.birthday"
                  class="form-control"
                  id="dateInput"
                  required
                />
                <label for="dateInput">出生年月日</label>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      v-model="userRegisterObject.address.zipcode"
                      class="form-control"
                      id="zipcode"
                      placeholder="100"
                      pattern="\d{3,}"
                      required
                    />
                    <label for="zipcode">郵遞區號</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      v-model="userRegisterObject.address.detail"
                      class="form-control"
                      id="address"
                      placeholder="台北市中正區重慶南路一段"
                      required
                    />
                    <label for="address">詳細地址</label>
                  </div>
                </div>
              </div>

              <button class="btn btn-lg btn-primary w-100" type="submit">
                註冊
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
