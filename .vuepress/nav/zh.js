module.exports = [
    // 导航栏链接
    { text: '指南', link: '/guide/' },
    { text: '论坛', link: 'https://bbs.csur.fun', target:'_self', rel:'next' },
    {
        text: '更多',
        items: [
            { text: '手册', items: [
            { text: '常见问题', link: '/guide/faq' },
            { text: '开发指南', link: '/develop/' },
            ] },
            { text: '讨论', items: [
            { text: 'QQ群', link: 'https://jq.qq.com/?_wv=1027&k=5wOzDNM', target:'_blank' },
            { text: 'DISCORD', link: 'https://discord.gg/bdqu5z8' },
            { text: 'Reddit', link: 'https://www.reddit.com/r/CitiesSkylinesModding/comments/d8y4xo/csur_automated_creation_of_road_assets_with/' },
            ] }
        ]
    },
    { text: 'Github', link: 'https://github.com/citiesskylines-csur/CSUR' }
]