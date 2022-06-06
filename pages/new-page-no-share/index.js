import {_Page as Page} from '../../app/index';

Page({
    shareExcluded: true,
    onLoad(query) {
        console.log(this.route, 'Page.onLoad', query);
    }
});
