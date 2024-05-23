import {_Page as Page} from '../../app/index';

Page({
    __name__: 'page_with_default_share',
    onLoad(query) {
        console.log('Page.onLoad', this.route, query);
    }
});
