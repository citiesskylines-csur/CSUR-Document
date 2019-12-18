module.exports = [
     // 导航栏链接
    { text: '使用説明', link: '/ja/guide/' },
    { text: 'フォーラム', link: 'https://bbs.csur.fun', target:'_self', rel:'next' },
    {
        text: 'さらに詳しく',
        items: [
          { text: 'マニュアル', items: [
            { text: 'よくある質問', link: '/ja/guide/faq' },
            { text: '開発者ガイド', link: '/ja/develop/' },
          ] },
          { text: '話し合う', items: [
            { text: 'QQ グループ', link: 'https://jq.qq.com/?_wv=1027&k=5wOzDNM', target:'_blank' },
            { text: 'DISCORD', link: 'https://discord.gg/bdqu5z8' },
            { text: 'Reddit', link: 'https://www.reddit.com/r/CitiesSkylinesModding/comments/d8y4xo/csur_automated_creation_of_road_assets_with/' },
          ] }
        ]
      }
]   
