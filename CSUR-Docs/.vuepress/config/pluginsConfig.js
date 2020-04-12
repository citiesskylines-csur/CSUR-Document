const secret = require("./secret");

module.exports = {
    '@vuepress/back-to-top':{},
    '@vuepress/nprogress':{},
    '@vuepress/medium-zoom':{},
    '@vuepress/google-analytics':
  {
    'ga': secret.ga // UA-00000000-0
  }

}