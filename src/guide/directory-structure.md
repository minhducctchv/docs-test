# Directory Structure

VuePress theo nguyên tắc **"Convention is better than configuration"**. Recommended structure là:

```
.
├── docs
│   ├── .vuepress _(**Optional**)_
│   │   ├── `components` _(**Optional**)_
│   │   ├── `theme` _(**Optional**)_
│   │   │   └── Layout.vue
│   │   ├── `public` _(**Optional**)_
│   │   ├── `styles` _(**Optional**)_
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── `templates` _(**Optional, Danger Zone**)_
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── `config.js` _(**Optional**)_
│   │   └── `enhanceApp.js` _(**Optional**)_
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json

```

::: warning Note
Khi tạo thư mục mới ngoài các thư mục mặc định trên thì phải ViếtHoa
:::

- `docs/.vuepress`: Used to store global configuration, components, static resources, etc.
- `docs/.vuepress/components`: The Vue components in this directory will be automatically registered as global components.
- `docs/.vuepress/theme`: Used to store local theme.
- `docs/.vuepress/styles`: Stores style related files.
- `docs/.vuepress/styles/index.styl`: Automatically applied global style files, generated at the ending of the CSS file, have a higher priority than the default style.
- `docs/.vuepress/styles/palette.styl`: The palette is used to override the default color constants and to set the color constants of Stylus.
- `docs/.vuepress/public`: Thư mục tài nguyên tĩnh.
- `docs/.vuepress/templates`: Store HTML template files.
- `docs/.vuepress/templates/dev.html`: HTML template file for _**development environment**_.
- `docs/.vuepress/templates/ssr.html`: Vue SSR based HTML template file in the built time.
- `docs/.vuepress/config.js`: file configuration, có thể là `yml` or `toml`.
- `docs/.vuepress/enhanceApp.js`: App level enhancement.

::: warning Note
Khi sửa `templates/ssr.html`, or `templates/dev.html`, tốt nhất nên dựa theo mẫu [default template files](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html), nếu ko có thể bị lỗi khi build.
:::

## Default Page Routing



Có thể đổi thư mục gốc từ `src` thành`tenThuMuc` (see [Command-line Interface](https://vuepress.vuejs.org/api/cli.html#usage)). All the "Relative Paths" below are relative to the `docs` directory. Add `scripts` in `package.json` which is located in your project’s root directory:

```json
{
  "scripts": {
    "dev": "vuepress dev tenThuMuc",
    "build": "vuepress build tenThuMuc"
  }
}
```

Mặc định thư mục `src` làm gốc, routing sẽ theo thư mục gốc:

| Relative Path      |  Page Routing  |
|--------------------|----------------|
| `/index.md`        | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |
