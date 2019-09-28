// pages/mine/mine.js
const app=getApp();
const {http}=require("../../utils/ajax.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    loginData: {
      modalHidden: true,
      mobile: "",
      code:"",
    },
    textList: [{
      'title': "收藏列表",
      'description': "微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,微信小程序 - 折叠展开效果,",
    }, {
      'title': "最爱",
      'description': "最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱 最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱 最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱 最爱最爱最爱最爱最爱最爱最爱最爱最爱最爱  ",

       },
    
  ],

  },
  gologin() { 
  
     
   
  },


  upDown(event) {
    var index = event.currentTarget.dataset['index'];
    this.data.textList[index].upStatus = !this.data.textList[index].upStatus;
    this.setData({
      textList: this.data.textList
    })
  },
  
  

cancelLogin() { 
    this.setData({
      "loginData.modalHidden":false,
    })
  },
  sendCode() {
    // 发送验证码
    wx.showLoading({ title: "加载中" });
    wx.request({
      url: "https://peng47.com:2906/react/sendCode",
      method: "POST",
      data: {
        mobile:this.data.loginData.mobile,
      },
      header: {
        'content-type':'application/json'
      },
      success: res=>{
        wx.hideLoading();
        wx.showToast({
          title:res.data.msg,
        })
        console.log(res)
      }
    })
   },
  todoLogin() { 
    wx.request({
      url: "https://peng47.com:2906/react/checkCode",
      method: "POST",
      data: {
        mobile: this.data.loginData.mobile,
        code:this.data.loginData.code,
      },
     
      success: res=>{
        console.log(res)
        wx.setStorageSync("isLogin", !!res.data.type);
        wx.setStorageSync("mobile", this.data.loginData.mobile);
        this.setData({
          "loginData.modalHidden":!res.data.type,
        })
       
      }
    })
  },


  // 获取验证码
  getCode(e) { 
    this.setData({
      'loginData.code':e.detail.value
    })
  },
// 获取手机号
  getMobile(e) { 
    this.setData({
      'loginData.mobile':e.detail.value
    })
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync("isLogin")!=="") {

      this.setData({
        'loginData.modalHidden': false
      })
    } else { 
      this.setData({
        'loginData.modalHidden': true
      })
    }


   
 
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
    if (wx.getStorageSync("isLogin")!=="") {

      this.setData({
        'loginData.modalHidden': false
      })
    } else { 
      this.setData({
        'loginData.modalHidden': true
      })
    }
    
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