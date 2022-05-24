import {_Page as Page} from '../../app/index';

Page({
    onLoad(query) {
        console.log(this.route, 'Page.onLoad', query);
    },
    onShareAppMessage() {
        return {
            title: '页面内配置的标题',
        };
    }
});
