
//为了对其他端产生影响，最好加上环境判断

let rnConfig = {}

if(process.env.TARO_ENV === 'rn'){
  rnConfig = {
  //deep Linking前缀,https://reactnavigation.org/docs/deep-linking
  linking:[],
  //tabBar页面的设置，https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar 对应options的配置，支持以下属性透传，不支持返回react.Node节点设置的方案
   options:{
      // title:"",
      // tabBarVisible:true,
      // tabBarBadge:1,
      // tabBarBadgeStyle:"",
      // tabBarTestID:"",
   },
   tabBarOptions:{//tabbarOptions的配置，其他参考https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar tabBarOptions

   },
   screenOptions:{//全局screenOptions，作用于非所有页面，注意不支持返回React.Node的属性，参考https://reactnavigation.org/docs/stack-navigator/#options

   }
  }
}

export default {
  pages: [
    'pages/index/index',
    'pages/other/other',
    'pages/demo/demo',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#333333',
    selectedColor: '#6190E8', // 主题色
    list: [

      {
        iconPath: './assets/icon/system.png',
        selectedIconPath: './assets/icon/system_selected.png',
        pagePath: 'pages/index/index',
        text: 'Home',
      },
      {
        iconPath: './assets/icon/user.png',
        selectedIconPath: './assets/icon/user_selected.png',
        pagePath: 'pages/other/other',
        text: 'Other',
      },
    ]
  },
  // rn:rnConfig,
}
