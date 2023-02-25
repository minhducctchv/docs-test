# Introduction

VuePress gồm two parts: a [minimalistic static site generator](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core) with a Vue-powered [theming system](https://vuepress.vuejs.org/theme/) and [Plugin API](https://vuepress.vuejs.org/plugin/), and a [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) tối ưu để viết technical documentation.

## How It Works

A VuePress là SPA (Single Page Application) powered by [Vue](http://vuejs.org/), [Vue Router](https://github.com/vuejs/vue-router) and [webpack](http://webpack.js.org/). (you can even use `Vue DevTools` to debug your custom theme!).

During the build, we create a server-rendered version of the app and render the corresponding HTML by virtually visiting each route. This approach is inspired by [Nuxt](https://nuxtjs.org/)'s `nuxt generate` command and other projects like [Gatsby](https://www.gatsbyjs.org/).

Each Markdown file được compiled thành HTML bằng [markdown-it](https://github.com/markdown-it/markdown-it) như 1 Vue component. Cho phép sử dụng Vue bên trong Markdown files rất tốt để nhúng dynamic content.



## Feature

**Built-in Markdown extensions**

* [Table of Contents](https://vuepress.vuejs.org/guide/markdown.html#table-of-contents)
* [Custom Containers](https://vuepress.vuejs.org/guide/markdown.html#custom-containers)
* [Line Highlighting](https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks)
* [Line Numbers](https://vuepress.vuejs.org/guide/markdown.html#line-numbers)
* [Import Code Snippets](https://vuepress.vuejs.org/guide/markdown.html#import-code-snippets)

**Using Vue in Markdown**

* [Templating](../guide/using-vue.md#templating)
* [Using Components](../guide/using-vue.md#using-components)

**Vue-powered custom theme system**

* [Metadata](../theme/writing-a-theme.md#site-and-page-metadata)
* [Content Excerpt](../theme/writing-a-theme.md#content-excerpt)

**Default theme**

* Responsive layout
* [Optional Homepage](../theme/default-theme-config.md#homepage)
* [Simple out-of-the-box header-based search](../theme/default-theme-config.md#built-in-search)
* [Algolia Search](../theme/default-theme-config.md#algolia-search)
* Customizable [navbar](../theme/default-theme-config.md#navbar) and [sidebar](../theme/default-theme-config.md#sidebar)
* [Auto-generated GitHub link and page edit links](../theme/default-theme-config.md#git-repo-and-edit-links)
* [PWA: Popup UI to refresh contents](../theme/default-theme-config.md#popup-ui-to-refresh-contents)
* [Last Updated](../theme/default-theme-config.md#last-updated)
* [Multi-Language Support](../guide/i18n.md)

**Blog theme**

* [Documentation](https://vuepress-theme-blog.billyyyyy3320.com/)
* [Live Example](https://billyyyyy3320.com/)


**Plugin**

* [Powerful Plugin API](../plugin/README.md)
* [Blog Plugin](https://vuepress-plugin-blog.billyyyyy3320.com/)
* [Search Plugin](../plugin/official/plugin-search.md)
* [PWA Plugin](../plugin/official/plugin-pwa.md)
* [Google Analytics Plugin](../plugin/official/plugin-google-analytics.md)
* ...

## Why Not..?

### Nuxt

Nuxt có thể làm được những gì mà Vuepress làm được nhưng nó được dùng để build application còn Vuepress tập trung cho nội dung static, tech docs.

### Docsify / Docute

Cũng được cung cấp bởi Vue.

### Hexo

Render Markdown file không linh hoạt.

### GitBook

Vấn đề hiệu suất. Nó được tập trung phát triển sản phẩm thương mại hơn là open source.