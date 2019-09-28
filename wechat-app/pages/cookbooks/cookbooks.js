// pages/cookbooks/cookbooks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    list: [],
    steps: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      name: options.name
    })
    wx.request({
      url: "http://localhost:1997/wechat/getCookBooks",
      data: {
        name: that.data.name
      },
      "content-type": "application/json",
      success(res) {
        console.log(res);
        that.setData({
          list: res.data.result,
          steps: res.data.result[0].steps
        })
        setTimeout(() => {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        }, 100)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})