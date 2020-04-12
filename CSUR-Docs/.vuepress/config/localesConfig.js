module.exports = {
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
}