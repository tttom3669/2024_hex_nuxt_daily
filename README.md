# Day 21 - VeeValidate 表單驗證套件運用 題目

請 clone 這一份模板，完成以下條件 :

- 將 `/pages/index.vue` 中的表單改成使用 VeeValidate 驗證。

  - 所有欄位必需進行驗證，要求如下 :

    1. 所有欄位都必需填寫。
    2. 姓名欄位需要填寫至少 2 個字元。
    3. 手機號碼欄位需要符合下方正規表達式的格式 :

       ```html
       /^(09)[0-9]{8}$/
       ```

  - 欄位驗證失敗時套用 Bootstrap 5 的 `is-invalid` 樣式。
  - 使用 VeeValidate 的元件顯示驗證失敗的訊息。
  - 透過 submit 事件處理表單提交。提交後使用 VeeValidate 的 resetForm 方法將表單重置。

- 模板已有安裝 VeeValidate 表單驗證所需套件，將 `@vee-validate/nuxt` 、驗證規則以及多國語系整合至 Nuxt3。以下是套件在使用上的細節 :
  - 表單驗證元件的名稱沒有限制，可以使用預設的元件 ( 如 `<Form>` ) 或是自訂元件名稱。
  - 不需載入所有驗證規則，只需載入表單所需的規則即可。
  - 多國語系的語言需使用繁體中文 ( zhTW )。

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.0.0` 以上

### 取得專案

```bash
git clone -b day21-vee-validate  https://github.com/jasonlu0525/nuxt3-live-question.git day21-vee-validate-question
```

### 移動到專案內

```bash
cd day21-vee-validate-question
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
