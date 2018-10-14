// pages/login/login.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },
  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },
  login: function () {
    app.appData.userinfo={username:this.data.username,password:this.data.password}
    if(this.data.username.length==0||this.data.password.length==0){
      wx.showToast({
        title: '用户名或密码不能为空',
        icon:'loading',
        duration:1000
      })
    }else{
      if(this.data.username=='he'){
        app.appData.userinfo=='he',
      wx.showToast({
        title: 'success',
        icon: 'success',
        duration: 2000,
        success: function () {
          wx.switchTab({
            url: '../user/user',
          })
        }
      })
    }else{
      wx.showToast({
        title: 'error',
        duration:2000,
      })
    }
      
    }
/*
    app.appData.userinfo={username:this.data.username,password:this.data.password};
    wx.redirectTo({
      url: '../user/user',
      })
*/
  }

})