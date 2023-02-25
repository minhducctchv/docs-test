# Deploying

Tình trạng:

- tài liệu đang đặt trong thư mục `docs`
- vị trí build là `.vuepress/dist`
- lệnh build trong `package.json` là 

``` json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

## GitHub Pages

1. Set đúng `base` trong `docs/.vuepress/config.js`.

   nếu deploy vào `https://<USERNAME>.github.io/`, thì `base` mặc định là `"/"` => ko cần set base.

   nếu deploy vào `https://<USERNAME>.github.io/<REPO>/`, VD `https://github.com/<USERNAME>/<REPO>`, thì `base` là `"/<REPO>/"`.

2. Tạo `deploy.sh`, và run để deploy:

``` bash{13,20,23}
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

::: tip
You can also run the above script in your CI setup to enable automatic deployment on each push.
:::

::: tip
When you use a **Custom Domain name**, you MUST add the CNAME file into /docs/.vuepress/public folder (Create the folder if it isn’t there). Otherwise, your CNAME file will always be removed with each deploy and never work.
:::