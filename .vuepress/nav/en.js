module.exports = [
     // 导航栏链接
    { text: 'Guide', link: '/en/guide/' },
    { text: 'Forum', link: 'https://bbs.csur.fun', target:'_self', rel:'next' },
    {
        text: 'Learn More',
        items: [
          { text: 'Book', items: [
            { text: 'FQA', link: '/en/guide/faq' },
            { text: 'Development Guide', link: '/en/develop/' },
          ] },
          { text: 'Discuss', items: [
            { text: 'QQ Group', link: 'https://jq.qq.com/?_wv=1027&k=5wOzDNM', target:'_blank' },
            { text: 'DISCORD', link: 'https://discord.gg/bdqu5z8' },
            { text: 'Reddit', link: 'https://www.reddit.com/r/CitiesSkylinesModding/comments/d8y4xo/csur_automated_creation_of_road_assets_with/' },
          ] }
        ]
      }
]   
