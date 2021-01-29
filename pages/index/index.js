Page({
    data: {
        key1: 'value1',
        key2: 'value2'
    },
    onLoad(query) {
        console.log(this.route, 'Page.onLoad', query);
    },
    onTapOldPage() {
        wx.navigateTo({
            url: '/pages/old-page/index'
        });
    },
    onTapCompoundPage() {
        wx.navigateTo({
            url: '/pages/new-page/index'
        });
    },
    onTapLibPage() {
        wx.navigateTo({
            url: '/pages/lib-page/index'
        });
    }
});
