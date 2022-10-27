import {_Page as Page} from '../../app/index';

Page({
    __name__: 'page_without_share',
    shareExcluded: true,
    onLoad(query) {
        console.log('Page.onLoad', this.route, query);
    }
});
