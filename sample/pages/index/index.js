Page({
    data: {
        key1: 'value1',
        key2: 'value2'
    },
    onLoad(query) {
        console.log('[Page].onLoad', this.route, this.data, query);
    },
    onTapOriginPage() {
        wx.navigateTo({
            url: '/pages/origin-page/index'
        });
    },
    onTapLibPage() {
        wx.navigateTo({
            url: '/pages/lib-page/index'
        });
    },
    onTapDefaultPage() {
        wx.navigateTo({
            url: '/pages/default-page/index'
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
    }
});
