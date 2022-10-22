import {_Page as Page} from '../../app/index';

Page({
    shareExcluded: true,
    onLoad(query) {
        console.log('Page.onLoad', this.route, query);
    },
    onShareAppMessage({from, target, webViewUrl}) {
    }
});
