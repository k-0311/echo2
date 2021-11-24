module.exports = {
  title: 'ECHO 2',
  description: 'greeting! my friend!',
  base:'/echo2/',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  port: 8848,
  // ga: '',
  // evergreen: true,
  // theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Article', link: '/js/ioc' },
      { text: 'External', link: 'https://www.baidu.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      },
      {
        text: 'other',
        items: [
          {
            text: '1st',
            items: [
              { text: 'one', link: '/one' },
              { text: 'two', link: '/two' }
            ]
          },
          {
            text: '2th',
            items: [
              { text: 'three', link: '/three' },
              { text: 'four', link: '/four' }
            ]
          }
        ]
      }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'JavaScript',
        collapsable: true,//是否折叠
        children: [
          ['/js/ioc', 'ioc'],
          ['/js/bit', '位运算']
        ]
      },
      {
        title: 'algorithms',
        collapsable: true,
        children: [
          ['/algorithms/link', '链表'],
          ['/algorithms/array', '数组']
        ]
      },
      {
        title: 'Rust',
        collapsable: true,
        children: ['/rust/first']
      },
      {
        title: 'Other',
        collapsable: true,
        children: [
          ['/other/git ssh','git ssh']
        ]
      }
    ]
  }
}