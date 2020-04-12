const pluginsConfig = require("./config/pluginsConfig");
const localesConfig = require("./config/localesConfig");
const headConfig = require("./config/headConfig");
const themeLocalesConfig = require("./config/themeLocalesConfig");
const secret = require("./config/secret");

module.exports = {
    plugins: pluginsConfig,
    // HTML多语言配置
    locales: localesConfig,
    
    // ico图标
    head: headConfig,

    // 主题配置
    themeConfig: {
        logo: '/assets/img/bbs-logo.webp', // 191228,隐藏左上角logo
        smoothScroll: true, // 平滑滚动
        algolia: { // 配置 Algolia 搜索
            apiKey: secret.apiKey,
            indexName: secret.indexName
        },
        
        // Git 仓库和编辑链接
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        // repo: 'citiesskylines-csur/CSUR',
        // 自定义仓库链接在菜单栏显示出来的文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'citiesskylines-csur/CSUR-Docs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'CSUR-Docs',
        // 假如文档放在一个特定的分支下：
        //docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"  已在多语言配置中配置
        // editLinkText: '帮助我们改善此页面！'

        // 多语言配置
        locales: themeLocalesConfig,
    },
}
