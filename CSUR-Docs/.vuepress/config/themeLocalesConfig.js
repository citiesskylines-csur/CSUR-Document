module.exports = {
    '/docs/': {
        // 多语言下拉菜单的标题
        selectText: '🌏选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        nav: require('../nav/zh'),
        sidebar: {
            '/docs/guide/': getGuideSidebar('前言','上手指南','说明书','安装','FAQ','捐赠'),
            '/docs/dev/': getDevelopSidebar('施工中')
        },
        // 默认为 "Edit this page" ， 编辑此页提示
        editLinkText: '帮助我们改善此页',
        // 最后更新时间
        lastUpdated: '上次更新' // string | boolean
    },
    '/tw/docs/': {
        // 多语言下拉菜单的标题
        selectText: '🌏選擇語言',
        // 该语言在下拉菜单中的标签
        label: '正體中文',
        nav: require('../nav/tw'),
        sidebar: {
            '/tw/docs/guide/': getGuideSidebar('前言','上手指南','说明书','安裝','FAQ','捐贈'),
            '/tw/docs/dev/': getDevelopSidebar('施工中')
        },
        // 默认为 "Edit this page" ， 编辑此页提示
        editLinkText: '幫助我們改善此頁',
        // 最后更新时间
        lastUpdated: '上次更新' // string | boolean
    },
    '/en/docs/': {
        // 多语言下拉菜单的标题
        selectText: '🌏Language',
        // 该语言在下拉菜单中的标签
        label: 'English',
        nav: require('../nav/en'),
        sidebar: {
            '/en/docs/guide/': getGuideSidebar('Perface','Getting Started','User Guide','Install','FAQ','Donate'),
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
        nav: require('../nav/ja'),
        sidebar: {
            '/ja/docs/guide/': getGuideSidebar('序文','入門ガイド','説明書','インストールする','FAQ','寄付する'),
            '/ja/docs/dev/': getDevelopSidebar('建設中')
        },
        lastUpdated: '最終更新', // string | boolean 最后更新时间
        // 默认为 "Edit this page" ， 编辑此页提示
        editLinkText: 'GitHubでこのページを編集',
        // 最后更新时间
        lastUpdated: '最終更新' // string | boolean
    }
}

// 导入指南页的侧边栏
function getGuideSidebar(readmeTitle, startTitle, toolboxTitle, installTitle, faqTitle, donateTitle) {
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
            title: toolboxTitle,
            collapsable: false, // 展开侧边栏分组-ToolBox 使用说明
            children: [
                'toolbox'
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