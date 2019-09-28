// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    foods: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoDetail(e) {
      console.log(e.currentTarget.dataset.id);
      wx.navigateTo({
        url: '../detail/detail?id=' + e.currentTarget.dataset.id,
      })
    },
  },

  lifetimes: {
    attached() {

    }
  }
})
