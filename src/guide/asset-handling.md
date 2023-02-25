# Asset Handling

## Relative URLs

``` md
![An image](./image.png)
```

Sử dụng `~` để chỉ định modun webpack (alias) hoặc dependence npm:

``` md
![Image from alias](~@alias/image.png)
![Image from dependency](~some-dependency/image.png)
```

`@source` nếu tuân theo [Cấu trúc thư mục](https://vuepress.vuejs.org/guide/directory-structure.html) thì nó sẽ là thư mục `docs` (? hoặc thư mục gốc)

``` md
![Image from images folder](~@source/images/image.png)
```

Webpack alias có thể được cấu hình thông qua [configureWebpack](https://vuepress.vuejs.org/config/#configurewebpack) trong `.vuepress/config.js`

``` js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}
```

## Public File

Nhưng file static ko được sử dụng bới file markdown nào thì có thể đặt trong `.vuepress/public`

## Base URL

**Khá hay (nhưng chưa hiểu ngay)**

If your site is deployed to a non-root URL, you will need to set the `base` option in `.vuepress/config.js`. For example, if you plan to deploy your site to `https://foo.github.io/bar/`, then `base` should be set to `"/bar/"` (it should always start and end with a slash).

With a base URL, to reference an image in `.vuepress/public`, you’d have to use URLs like `/bar/image.png`. But this is brittle if you ever decide to change the `base`. To help with that, VuePress provides a built-in helper `$withBase` (injected onto Vue’s prototype) that generates the correct path:

``` vue
<img :src="$withBase('/foo.png')" alt="foo">
```

Note you can use the above syntax not only in theme components, but in your Markdown files as well.

Also, if a `base` is set, it’s automatically prepended to all asset URLs in `.vuepress/config.js` options.
