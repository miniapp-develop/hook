const {_Page} = require('../../libs/index');

_Page({
    onLoad(query) {
        console.log('Page.onLoad', this.route, query);
    }
});
