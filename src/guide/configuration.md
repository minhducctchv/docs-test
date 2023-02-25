# Configuration

## Config File

Là file config.js nằm trong cây thư mục sau:

```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

Tùy chỉnh trong `module.exports`
``` js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

Vào [Config Reference](https://vuepress.vuejs.org/config/) để xem full list of options.

::: tip Thanh tìm kiếm mặc định
Nó sẽ tìm kiếm tất cả `title`, `h2`, `h3` trong all pages
:::

::: tip Thay đổi định dạng file Config
Bạn có thể sử dụng TS(`.vuepress/config.ts`), YAML (`.vuepress/config.yml`) or TOML (`.vuepress/config.toml`), dùng ts tham khảo [TypeScript as Config](https://vuepress.vuejs.org/guide/typescript-as-config.html).
:::

## Theme Configuration

Tùy chỉnh theme có thể chỉnh navbar, sidebar, tìm kiếm, homopage... tham khảo [Default Theme Config](https://vuepress.vuejs.org/theme/default-theme-config.html).

Để custom theme xem [Writing a theme](https://vuepress.vuejs.org/theme/writing-a-theme.html).

## App Level Enhancements

VuePress là app Vue nên có thể cải tiến thêm các thứ của vue vào trong file `.vuepress/enhanceApp.js`

``` js
// async function is also supported, too
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  // ...apply enhancements to the app
}
```




