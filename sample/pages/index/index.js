Page({
    data: {
        key1: 'value1',
        key2: 'value2'
    },
    onLoad(query) {
        console.log('Page.onLoad', this.route, this.data, query);
    },
    onTapOldPage() {
        wx.navigateTo({
            url: '/pages/old-page/index'
        });
    },
    onTapNewPageWithoutShare() {
        wx.navigateTo({
            url: '/pages/new-page-without-share/index'
        });
    },
    onTapNewPageWithDefaultShare() {
        wx.navigateTo({
            url: '/pages/new-page-with-default-share/index'
        });
    },
    onTapNewPageWithCustomShare() {
        wx.navigateTo({
            url: '/pages/new-page-with-custom-share/index'
        });
    },
    onTapLibPage() {
        wx.navigateTo({
            url: '/pages/lib-page/index'
        });
    }
});
