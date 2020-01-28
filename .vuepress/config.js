module.exports = {
    plugins: {
        '@vuepress/back-to-top':{},
        '@vuepress/nprogress':{},
        '@vuepress/medium-zoom':{},
        '@vuepress/google-analytics':
      {
        'ga': 'UA-155097920-1' // UA-00000000-0
      }

    },
    // HTML多语言配置
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/docs/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'CSUR 文档',
        },
        '/tw/docs/': {
            lang: 'zh-TW', // 将会被设置为 <html> 的 lang 属性
            title: 'CSUR 文檔',
            description: '',
        },
        '/en/docs/': {
            lang: 'en',
            title: 'CSUR Documentation',
        },
        '/ja/docs/': {
            lang: 'ja',
            title: 'CSURドキュメント',
          }
    },
    
    // ico图标
    head: [
        ['meta', { name: 'keywords', content: 'CSUR, CSUE, 开发文档, 用户文档, CSUR Documentation'}],
        ['link', { rel: 'icon', href: '/assets/img/ico.png' }],
        ['base', {target: '_self'}]
    ],

    // 主题配置
    themeConfig: {
        logo: '/assets/img/bbs-logo.webp', // 191228,隐藏左上角logo
        smoothScroll: true, // 平滑滚动
        algolia: { // 配置 Algolia 搜索
            apiKey: '5e462462c53fab53286a9ddc5ef386b1',
            indexName: 'csur'
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
        // docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        //docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"  已在多语言配置中配置
        // editLinkText: '帮助我们改善此页面！'

        // 多语言配置
        locales: {
            '/docs/': {
                // 多语言下拉菜单的标题
                selectText: '🌏选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                nav: require('./nav/zh'),
                sidebar: {
                    '/docs/guide/': getGuideSidebar('前言','上手指南','安装','FAQ','捐赠'),
                    '/docs/dev/': getDevelopSidebar('施工中')
                },
                // 默认为 "Edit this page" ， 编辑此页提示
                editLinkText: '在 GitHub 上编辑此页',
                // 最后更新时间
                lastUpdated: '上次更新' // string | boolean
            },
            '/tw/docs/': {
                // 多语言下拉菜单的标题
                selectText: '🌏選擇語言',
                // 该语言在下拉菜单中的标签
                label: '正體中文',
                nav: require('./nav/tw'),
                sidebar: {
                    '/tw/docs/guide/': getGuideSidebar('前言','上手指南','安裝','FAQ','捐贈'),
                    '/tw/docs/dev/': getDevelopSidebar('施工中')
                },
                // 默认为 "Edit this page" ， 编辑此页提示
                editLinkText: '在 GitHub 上編輯此頁',
                // 最后更新时间
                lastUpdated: '上次更新' // string | boolean
            },
            '/en/docs/': {
                // 多语言下拉菜单的标题
                selectText: '🌏Language',
                // 该语言在下拉菜单中的标签
                label: 'English',
                nav: require('./nav/en'),
                sidebar: {
                    '/en/docs/guide/': getGuideSidebar('Perface','Getting Started','Install','FAQ','Donate'),
                    '/en/docs/dev/': getDevelopSidebar('Under Construction)')
                },
                lastUpdated: 'Last Updated', // string | boolean 最后更新时间
                // 默认为 "Edit this page" ， 编辑此页提示
                editLinkText: 'Edit this page on GitHub',
                // 最后更新时间
                lastUpdated: 'Last Updated' // string | boolean
            },
            '/ja/docs/': {
                // 多语言下拉菜单的标题
                selectText: '🌏使用言語',
                // 该语言在下拉菜单中的标签
                label: '日本語',
                nav: require('./nav/ja'),
                sidebar: {
                    '/ja/docs/guide/': getGuideSidebar('序文','入門ガイド','インストールする','FAQ','寄付する'),
                    '/ja/docs/dev/': getDevelopSidebar('建設中')
                },
                lastUpdated: '最終更新', // string | boolean 最后更新时间
                // 默认为 "Edit this page" ， 编辑此页提示
                editLinkText: 'GitHubでこのページを編集',
                // 最后更新时间
                lastUpdated: '最終更新' // string | boolean
            }
        },
    },
}

// 导入指南页的侧边栏
function getGuideSidebar(readmeTitle, startTitle, installTitle, faqTitle, donateTitle) {
    return[
        {
            title: readmeTitle,
            collapsable: false, // 展开侧边栏分组-前言
            children: [
                ['', readmeTitle] // 显示本组到边栏，但不展开标题。单引号留空时会默认引用默认页，因为本组本来就是默认页，所以不会出现内容显示问题
            ]
        },
        {
            title: startTitle,
            collapsable: false, // 展开侧边栏分组-上手指南
            children: [
                'core.md', // 这样可以自定义本组在边栏显示的文字
                'compatibility.md',
                'notice.md',  
            ]
        },
        {
            title: installTitle,
            collapsable: false, // 展开侧边栏分组-如何安装
            children: [
                'install'
            ]
        },
        {
            title: faqTitle,
            collapsable: false, // 展开侧边栏分组-FAQ
            children: [
                'faq'
            ]
        },
        {
            title: donateTitle,
            collapsable: false, // 展开侧边栏分组-捐赠
            children: [
                ['https://www.csur.fun/donate/', donateTitle], // 显示本组到边栏，但不展开标题
                'donate-list'
            ]
        }
    ]
}

// 导入开发者页面的侧边栏
function getDevelopSidebar(developTitle){
    return [
        {
            title: developTitle,
            collapsable: false,
            children: [
                ['', developTitle] // 显示本组到边栏，但不展开标题
            ]
        }
    ]
}

    
