module.exports = [
    // 導航欄鏈接
    { text: '指南', link: '/tw/docs/guide/' },
    { text: '論壇', link: 'https://bbs.csur.fun', target: '_self', rel:'next' },
    {
        text: '更多',
        items: [
            { text: '手冊', items: [
                { text: '常見問題', link: '/tw/docs/guide/faq' },
                { text: '開發指南', link: '/tw/docs/dev/' },
            ] },
            { text: '討論', items: [
                { text: 'QQ群', link: 'https://jq.qq.com/?_wv=1027&k=5wOzDNM', target:'_blank' },
                { text: 'DISCORD', link: 'https://discord.gg/bdqu5z8' },
                { text: 'Reddit', link: 'https://www.reddit.com/r/CitiesSkylinesModding/comments/d8y4xo/csur_automated_creation_of_road_assets_with/' },
            ] }
        ]
    },
    { text: 'GitHub', link: 'https://github.com/citiesskylines-csur/CSUR', target:'_blank'}
]