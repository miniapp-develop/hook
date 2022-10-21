import {_Page as Page} from '../../app/index';

Page({
    onLoad(query) {
        console.log('Page.onLoad', this.route, this.data, query);
    },
    onShareAppMessage() {
        return {
            title: '页面内配置的标题',
        };
    }
});
