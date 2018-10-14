Page(
{
  data: {
    bgcolor:'green',
    red:0,
    green:0,
    blue:0

  },

redfun:function(e){
  // console.log(parseInt(event.detail.x));
  var rr=parseInt(e.detail.x);
  this.setData({
    red:rr
  }),
  console.log(e);
},

  greenfun: function (e) {
    // console.log(parseInt(event.detail.x));
    var rr = parseInt(e.detail.x);
    this.setData({
      green: rr
    })
  },

  // bluefun: function (e) {
  //   // console.log(parseInt(event.detail.x));
  //   var rr = parseInt(e.detail.x);
  //   this.setData({
  //     blue: rr
  //   })
  // },

    bluefun(e) {
      // console.log(parseInt(event.detail.x));
      var rr = parseInt(e.detail.value);
      this.setData({
        blue: rr
      }),
      console.log(e);

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