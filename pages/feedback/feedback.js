var util=require('../../utils/util.js');

// pages/feedback/feedback.js
Page({
  data:{
   text:'hi',
   num:0,
   array:[{text:'init data'}],
   object:{
     text:'init data'}
  },
  changeText:function(){
    this.setData({
      text:'hxf'
    })
  },
  changeNum:function(){
    this.setData({
      num:1
    })
  },
  changeItemInArray:function(){
    this.setData({
      'array[0].text':'change data'
    })
  },
  changeItemInObject:function(){
         this.setData({
        'object.text': 'changed data'
      })
  },
  addNewField:function(){
    this.setData({
      'newField.text':'new data'
    })
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

  }
})