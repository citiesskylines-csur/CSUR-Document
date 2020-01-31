# CSUR-Vuepress Root

> This repository contains privacy codes, DO NOT make it public.

Before build pages, please head VuePress's [documentation](https://v1.vuepress.vuejs.org/guide/getting-started.html) for more required details.

> 

### Required directory
[CSUR-Vuepress/CSUR-Docs](https://github.com/citiesskylines-csur/CSUR-Docs)

### Required Plugin
[For More Information](https://vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html#%E5%AE%89%E8%A3%85)
```sh
yarn add -D @vuepress/plugin-active-header-links
# @vuepress/plugin-active-header-links

yarn add -D @vuepress/plugin-back-to-top
# @vuepress/plugin-back-to-top

yarn add -D @vuepress/plugin-google-analytics
# @vuepress/plugin-google-analytics

yarn add -D @vuepress/plugin-medium-zoom
# @vuepress/plugin-medium-zoom

yarn add -D @vuepress/plugin-nprogress
# @vuepress/plugin-nprogress

```
## Development

```bash
yarn dev
yarn build
```
## After build
Merge builded files(path: .Vuepress/dist) with [CSUR-Website](https://github.com/Littlegolden/CSUR-Website), then upload them to the server.
