Page({
  data: {},

  onLoad() {
    console.log('关于页面加载')
  },

  onShareAppMessage() {
    return {
      title: '我的小程序示例',
      path: '/pages/index/index'
    }
  }
}) 