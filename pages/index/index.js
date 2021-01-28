import {_Page as Page} from '../../app/index';

Page({
    data: {
        key1: 'value1',
        key2: 'value2'
    },
    onLoad(query) {
        console.log('Page.onLoad', query);
    },
    onTapOldPage(){
        wx.navigateTo({
            url:'/pages/old/index'
        });
    }
});
