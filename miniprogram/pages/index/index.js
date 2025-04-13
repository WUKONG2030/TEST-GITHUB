Page({
  data: {
    counter: 0
  },

  onLoad() {
    console.log('页面加载')
  },

  handleClick() {
    wx.showToast({
      title: '你点击了按钮',
      icon: 'success'
    })
  },

  handleIncrement() {
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handleDecrement() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
}) 