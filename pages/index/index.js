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
    onTapNewPage() {
        wx.navigateTo({
            url: '/pages/new-page/index'
        });
    },
    onTapNewPageNoShare() {
        wx.navigateTo({
            url: '/pages/new-page-no-share/index'
        });
    },
    onTapLibPage() {
        wx.navigateTo({
            url: '/pages/lib-page/index'
        });
    }
});
